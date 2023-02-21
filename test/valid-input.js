
const { expect } = require('chai');
const makeRequest = require('../utils/helpers');
const baseUrl = "http://localhost:8080/v1/cleaning-sessions";

describe("Robot Hoover Service: valid use cases", function () {
    it("should return the correct output for a simple input", async () => {
        const payload = {
            roomSize: [5, 5],
            coords: [1, 2],
            patches : [
                [1, 0],
                [2, 2],
                [2, 3]
            ],
            instructions: "NNESEESWNWW",
        };
        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 200').equal(200);
        expect(resp.data).to.deep.equal({
            coords: [1, 3],
            patches: 1
        });

    });

    it("should return the correct output when there are no dirt patches in the room", async () => {
        const payload = {
            roomSize: [5, 5],
            coords: [1, 2],
            patches : [
            ],
            instructions: "NNESEESWNWW",
        };
        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 200').equal(200);
        expect(resp.data).to.deep.equal({
            coords: [1, 3],
            patches: 0
        });
    });

    it("should return the correct output when starting off on a dirt patch", async () => {
        const payload = {
            roomSize: [5, 5],
            coords: [1, 2],
            patches : [ [1, 2], [2, 2], [2, 3] ],
            instructions: "NNESEESWNWW",
        };
        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 200').equal(200);
        expect(resp.data).to.deep.equal({
            coords: [1, 3],
            patches: 1
        });
    });

    it("should return the correct output when no instructions are given", async () => {
        const payload = {
            roomSize: [5, 5],
            coords: [1, 2],
            patches : [ [1, 2], [2, 2], [2, 3] ],
            instructions: "",
        };
        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 200').equal(200);
        expect(resp.data).to.deep.equal({
            coords: [1, 2],
            patches: 0
        });
    });

    it("should return the correct output when encountering a wall", async () => {
        const payload = {
            roomSize: [5, 5],
            coords: [0, 0],
            patches : [ [1, 2], [2, 2], [2, 3] ],
            instructions: "W",
        };
        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 200').equal(200);
        expect(resp.data).to.deep.equal({
            coords: [0, 0],
            patches: 0
        });
    });

});
