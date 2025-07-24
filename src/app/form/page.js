"use client";

import { updateUserAction } from "../actions/update-user-action";

export default function Form() {
    return (
        <div className="w-full flex flex-col gap-8">
            <h1 className="text-2xl font-bold text-center">
                Server Action Example
            </h1>
            <form action={updateUserAction} className="flex flex-col gap-2">
                <input type="text" name="name" />
                <button
                    type="submit"
                    className="bg-blue-500 px-2 py-1 text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
