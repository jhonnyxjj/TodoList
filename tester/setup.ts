import { expect, type MatcherResult } from "bun:test";

declare module 'bun:test' {
    interface Matchers {
        toHaveErrorStructure(): MatcherResult
    }
}

function message(pass: boolean, received: unknown) : string {
    if(pass) { return ""; }
    return `Invalid error structure. Expected JSON with forma {"error": "some message"} but received:\n${JSON.stringify(received)}`
}

expect.extend({
    toHaveErrorStructure(received: unknown) : MatcherResult {
        const obj = received as Record<string, unknown>

        const hasError = typeof obj?.error === 'string';
        const hasMessage = !!obj?.error;
        const pass = hasError && hasMessage;

        return {
            pass,
            message: message(pass, received)
        }
    }
})