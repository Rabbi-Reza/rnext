"use client";

import { useRouter } from "next/navigation";

export default function Search() {
    const router = useRouter();

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = new URLSearchParams();

        for (const [name, value] of formData) {
            data.append(name, value);
        }

        router.push(`todos?${data.toString()}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input className="border rounded p-1 mx-1" name="query" />
            <button
                className="bg-teal-700 text-white px-2 py-1 rounded"
                type="submit"
            >
                Search
            </button>
        </form>
    );
}
