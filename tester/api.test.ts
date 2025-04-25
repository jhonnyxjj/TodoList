import { test, expect, beforeAll, describe } from 'bun:test';
import axios, { type AxiosInstance } from 'axios';
import "./setup";

type Task = {
	id: number;
	title: string;
	description: string;
	completed: boolean;
};

const BASE_URL = "http://localhost:3000/tasks";
let api: AxiosInstance;

const newTask: Partial<Task> = {
	title: `Task ${Date.now()}`,
	description: "Test task",
};

beforeAll(() => {
	api = axios.create({
		baseURL: BASE_URL,
		validateStatus: () => true,
	});
});

test("should return empty array when getting all tasks", async () => {
	const res = await api.get("");
	expect(res.status).toBe(200);
	expect(res.data).toEqual({ tasks: [] });
});

test("should return error if creating task without title", async () => {
	const task: Partial<Task> = {
		description: "Test",
	};
	const res = await api.post("", task);
	expect(res.status).toBe(400);
	expect(res.data).toHaveErrorStructure();
});

test("should create task", async () => {
	const res = await api.post("", newTask);
	expect(res.status).toBe(201);
});

test("should return newly created task", async () => {
	const res = await api.get("");
	expect(res.status).toBe(200);
	expect(res.data).toHaveProperty("tasks");
	expect(res.data.tasks?.length).toBe(1);
	expect(res.data.tasks[0]).toEqual({
		id: 1,
		title: newTask.title,
		description: newTask.description,
		completed: false,
	});
});

test("should create task without description", async () => {
	const { description, ...payload } = newTask;
	let res = await api.post("", payload);
	expect(res.status).toBe(201);

	res = await api.get("");
	expect(res.status).toBe(200);
	expect(res.data.tasks?.length).toBe(2);
	expect(res.data.tasks[1]).toEqual({
		id: 2,
		title: newTask.title,
		description: "",
		completed: false,
	});
});

test("should create task ignoring provided id", async () => {
	const payload = { ...newTask, id: 99 };
	let res = await api.post("", payload);
	expect(res.status).toBe(201);

	res = await api.get("");
	expect(res.status).toBe(200);
	expect(res.data.tasks?.length).toBe(3);
	expect(res.data.tasks[2]).toEqual({
		id: 3,
		title: newTask.title,
		description: newTask.description,
		completed: false,
	});
});

test("should edit task title", async () => {
	const res = await api.patch("/1", { title: "NEW TITLE" });
	expect(res.status).toBe(200);
	expect(res.data).toEqual({
		id: 1,
		title: "NEW TITLE",
		description: newTask.description,
		completed: false,
	});
});

test("should not edit completed task", async () => {
	let res = await api.patch("/1/complete");
	expect(res.status).toBe(200);

	res = await api.patch("/1", { title: "EDITED AFTER COMPLETE" });
	expect(res.status).toBe(400);
	expect(res.data).toHaveErrorStructure();
});

test("should return 404 when editing nonexistent task", async () => {
	const res = await api.patch("/999", { title: "Doesn't exist" });
	expect(res.status).toBe(404);
	expect(res.data).toHaveErrorStructure();
});

test("should return 400 if complete already completed task", async () => {
	const res = await api.patch("/1/complete");
	expect(res.status).toBe(400);
	expect(res.data).toHaveErrorStructure();
});

test("should return 404 when completing nonexistent task", async () => {
	const res = await api.patch("/999/complete");
	expect(res.status).toBe(404);
	expect(res.data).toHaveErrorStructure();
});

test("should delete a task", async () => {
	const res = await api.delete("/3");
	expect(res.status).toBe(204);
});

test("should return 404 when deleting nonexistent task", async () => {
	const res = await api.delete("/999");
	expect(res.status).toBe(404);
	expect(res.data).toHaveErrorStructure();
});
