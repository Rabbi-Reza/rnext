import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
    const { title, category, image, price } = product;

    return (
        <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
            <Link href="/" className="block">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50 dark:bg-gray-800">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        priority={false}
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                    />
                </div>

                <div className="p-4">
                    <h3 className="line-clamp-2 text-base font-medium text-gray-900 dark:text-gray-100">
                        {title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {price}
                    </p>
                </div>
            </Link>
        </article>
    );
}
