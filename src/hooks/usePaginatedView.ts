import { useState } from "react";

export function usePaginatedView<T>(items: T[], initialCount: number) {
    const [visibleCount, setVisibleCount] = useState(initialCount);

    const visibleItems = items.slice(0, visibleCount);
    const hasMore = visibleCount < items.length;

    const showMore = () => setVisibleCount((prev) => Math.min(prev + initialCount, items.length));
    const showLess = () => setVisibleCount(initialCount);

    return { visibleItems, hasMore, showMore, showLess };
}
