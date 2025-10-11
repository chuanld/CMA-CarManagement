import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { FilterOptions } from '@/types/api';
import { Check, X } from 'lucide-react';
import React from 'react'

type Props = {
    filters: any,
    currentFilters?: any,
    onFilterChange?: (filterName: string, value: string | number | [number, number] | null) => void,
    onClearFilter?: (filterName:string) => void
}

const CarFilterControls = ({filters, currentFilters, onFilterChange, onClearFilter}: Props) => {

    const { make, bodyType, fuelType, transmission, priceRange } = currentFilters;

    const filterSections = [
        {
            id: 'make',
            title: 'Make',
            options: filters.makes.map((make:any)=>({value: make, label: make})),
            currentValue: make,
            onChange: (value:string) => onFilterChange && onFilterChange('make', value),
        },
        {
            id: 'bodyType',
            title: 'Body Type',
            options: filters.bodyTypes.map((bodyType:string)=>({value: bodyType, label: bodyType})),
            currentValue: bodyType,
            onChange: (value:string) => onFilterChange && onFilterChange('bodyType', value),
        },
        {
            id: 'fuelType',
            title: 'Fuel Type',
            options: filters.fuelTypes.map((fuelType:string)=>({value: fuelType, label: fuelType})),
            currentValue: fuelType,
            onChange: (value:string) => onFilterChange && onFilterChange('fuelType', value),
        },
        {
            id: 'transmission',
            title: 'Transmission',
            options: filters.transmissions.map((transmission:string)=>({value: transmission, label: transmission})),
            currentValue: transmission,
            onChange: (value:string) => onFilterChange && onFilterChange('transmission', value),
        },
        
    ]
    console.log(filterSections,'filterSections');
  return (
    <div>
        <div className="space-y-4">
            <h3 className="font-medium">Price Range:</h3>
            <div className="px-2">
                <Slider
                    min={filters.priceRanges.min || 0}
                    max={filters.priceRanges.max || 100000}
                    step={100}
                    value={priceRange}
                    onValueChange={(value:[number, number]) => onFilterChange && onFilterChange('priceRange', value)}
                />
            </div>
            <div className='flex items-center justify-between'>
                <div className="font-medium text-sm">$ {priceRange[0]}</div>
                <div className="font-medium text-sm">$ {priceRange[1]}</div>
            </div>

            {filterSections.map((section)=>(
                <div className="space-y-3" key={section.id}>
                    <h4 className="text-sm font-medium flex justify-between items-center">
                        <span>{section.title}</span>
                        {section.currentValue && (
                            <Button
                                className='text-xs text-gray-600 flex items-center cursor-pointer'
                                onClick={() => onClearFilter && onClearFilter(section.id)}
                                variant='link'
                            >
                                <X className='mr-1 h-3 w-3' />
                                Clear
                            </Button>
                        )}
                    </h4>

                    <div className='flex flex-wrap gap-2 max-h-60 overflow-y-auto pr-1'>
                        {section.options.map((option:{value: string, label: string}) => (
                            <Badge
                                key={option.value}
                                variant={section.currentValue === option.value ? 'default' : 'outline'}
                                className={`m-1 cursor-pointer ${section.currentValue === option.value ? 'bg-bg-cma text-white' : ''}`}
                                onClick={() => section.onChange(
                                    section.currentValue === option.value ? '' : option.value
                                )}
                            >
                                {option.label}
                                {section.currentValue === option.value && (
                                    <Check className='ml-1 h-3 w-3' />

                                )}
                            </Badge>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CarFilterControls