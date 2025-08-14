import Form from "next/form";

export default function Search() {
    return (
        <Form action="/result" className="flex flex-col gap-2">
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
        </Form>
    );
}
