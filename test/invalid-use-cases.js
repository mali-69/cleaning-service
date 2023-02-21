
const axios = require('axios');
const { expect } = require('chai');
const makeRequest = require('../utils/helpers');
const baseUrl = "http://localhost:8080/v1/cleaning-sessions";

describe("Robot Hoover Service: Invalid use cases", function () {
    it("should return an error if supplying invalid array using strings for room size", async () => {
        const payload = {
            roomSize: ["1", "1"],
            coords: [0, 0],
            patches : [
                [1, 0],
                [2, 2],
                [2, 3]
            ],
            instructions: "EEE",
        };


        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if supplying invalid array using negative integers for room size", async () => {
        const payload = {
            roomSize: [-0, -0],
            coords: [0, 0],
            patches : [
                [1, 0],
                [2, 2],
                [2, 3]
            ],
            instructions: "EEE",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if supplying invalid mixed array for room size", async () => {
        const payload = {
            roomSize: ["0", "Hi"],
            coords: [0, 0],
            patches : [
                [1, 0],
                [2, 2],
                [2, 3]
            ],
            instructions: "EEE",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if supplying invalid array using strings for coords", async () => {
        const payload = {
            roomSize: [0, 0],
            coords: ["0", "0"],
            patches : [
                [1, 0],
                [2, 2],
                [2, 3]
            ],
            instructions: "EEE",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if supplying invalid array using negative integers for coords", async () => {
        const payload = {
            roomSize: [0, 0],
            coords: [-5, -3],
            patches : [
                [1, 0],
                [2, 2],
                [2, 3]
            ],
            instructions: "EEE",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if supplying invalid mixed array for coords", async () => {
        const payload = {
            roomSize: [0, 0],
            coords: [1, "0"],
            patches : [
                [1, 0],
                [2, 2],
                [2, 3]
            ],
            instructions: "EEE",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if supplying invalid array using strings for patches", async () => {
        const payload = {
            roomSize: [0, 0],
            coords: [0, 0],
            patches: [["1","2"]],
            instructions: "EEE",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if supplying invalid array using negative integers for patches", async () => {
        const payload = {
            roomSize: [0, 0],
            coords: [1, 3],
            patches: [-2,-3],
            instructions: "EEE",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if supplying invalid mixed array for patches", async () => {
        const payload = {
            roomSize: [0, 0],
            coords: [1, 3],
            patches: ["2","Hi"],
            instructions: "EEE",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if supplying invalid mixed input for instructions", async () => {
        const payload = {
            roomSize: [0, 0],
            coords: [1, 3],
            patches: [2,3],
            instructions: "EEEn",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if instructions array is empty", async () => {
        const payload = {
            roomSize: [0, 0],
            coords: [1, 3],
            patches: [2,3],
            instructions: "",
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });

    it("should return an error if instructions field is missing", async () => {
        const payload = {
            roomSize: [0, 0],
            coords: [1, 3],
            patches: [[2,3]],
        };

        const resp = await makeRequest.postData(baseUrl, payload);
        expect(resp.status, 'Status should be 400').equal(400);
        expect(resp.error, 'Error should be clear').equal("Bad Request")

    });
});
