"use client";

import { useRouter } from "next/navigation";

export default function OldSearch() {
    const router = useRouter();

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = new URLSearchParams();

        // constructing searchParams
        for (const [name, value] of formData) {
            data.append(name, value);
        }

        // construct url and navigate
        router.push(`result?${data.toString()}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
                type="text"
                name="name"
                className="outline-none p-2 rounded shadow"
            />
            <button
                type="submit"
                className="bg-blue-500 px-2 py-1 rounded shadow text-white"
            >
                Submit
            </button>
        </form>
    );
}
