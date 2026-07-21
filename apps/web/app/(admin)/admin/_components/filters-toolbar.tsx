import { Search } from "lucide-react";
import React, { useState } from "react";

type SortOptions = "newest" | "oldest" | "priceAsc" | "priceDesc";


interface FiltersToolbarProps {
    onSearch: (search: string) => void;
    onFilterChange: (filters: Record<string, any>) => void;
    onSortChange: (sortBy: SortOptions) => void;
}

const FiltersToolbar: React.FC<FiltersToolbarProps> = ({
    onSearch,
    onFilterChange,
    onSortChange,
}) => {
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({
        status: "",
        bodyType: "",
        fuelType: "",
        transmission: "",
        color: "",
        year: "",
        minPrice: "",
        maxPrice: "",
        make: "",
        model: "",
    });
    const [sortBy, setSortBy] = useState("newest");

    const handleSearch = () => {
        onSearch(search);
    };

    const handleFilterChange = (key: string, value: any) => {
        const updatedFilters = { ...filters, [key]: value };
        setFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const handleSortChange = (value: SortOptions) => {
        setSortBy(value);
        onSortChange(value);
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md">
            {/* Search Bar */}
            <div className="flex items-center w-full md:w-1/3">
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    <Search />
                </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
                <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange("status", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Status</option>
                    <option value="available">Available</option>
                    <option value="sold">Sold</option>
                </select>
                <select
                    value={filters.bodyType}
                    onChange={(e) => handleFilterChange("bodyType", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Body Type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                </select>
                <select
                    value={filters.fuelType}
                    onChange={(e) => handleFilterChange("fuelType", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Fuel Type</option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                </select>
                <select
                    value={filters.transmission}
                    onChange={(e) => handleFilterChange("transmission", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Transmission</option>
                    <option value="manual">Manual</option>
                    <option value="automatic">Automatic</option>
                </select>
                <input
                    type="number"
                    placeholder="Min Price"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Sort By */}
            <div className="flex items-center">
                <select
                    value={sortBy}
                    onChange={(e) => handleSortChange(e.target.value as SortOptions)}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default FiltersToolbar;