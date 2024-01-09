import { NextResponse } from "next/server";
import { isProduction } from "./production";

export function handleError(e: any) {
    console.error(`Error: ${e.message} ${e.stack}`);
    const response = {
        success: false,
        error: "There was a server error."
    }
    if (!isProduction()) {
        response.error = e.message;
    }
    return NextResponse.json(response);
}