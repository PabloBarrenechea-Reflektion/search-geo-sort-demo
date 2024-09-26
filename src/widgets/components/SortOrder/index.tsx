// This component was generated by @sitecore-search/cli on Thu Sep 26 2024 12:00:25 GMT+0200 (Central European Summer Time)

import type { SearchResponseSortChoice } from '@sitecore-search/react';
import { useSearchResultsActions } from '@sitecore-search/react';
import { SortSelect } from '@sitecore-search/ui';

type SortOrderProps = {
  options: Array<SearchResponseSortChoice>;
  selected: string;
};
const SortOrder = ({ options, selected }: SortOrderProps) => {
  const selectedSortIndex = options.findIndex((s) => s.name === selected);
  const { onSortChange } = useSearchResultsActions();
  return (
    <SortSelect.Root defaultValue={options[selectedSortIndex]?.name} onValueChange={onSortChange}>
      <SortSelect.Trigger className="cursor-pointer inline-flex items-center bg-transparent h-10 gap-1 py-1 px-4 border-0 focus:outline-gray-700">
        <SortSelect.SelectValue>
          {selectedSortIndex > -1 ? options[selectedSortIndex].label : ''}
        </SortSelect.SelectValue>
        <SortSelect.Icon />
      </SortSelect.Trigger>
      <SortSelect.Content className="bg-gray-100 dark:bg-gray-700 shadow-[2px_2px_4px_#CFCFCF] z-[100] absolute top-8 focus-within:border-gray-700 min-w-[150px] rounded-md">
        <SortSelect.Viewport className="p-1 z-[50000]">
          {options.map((option: any) => (
            <SortSelect.Option
              value={option}
              key={option.name}
              className="flex rounded-sm items-center p-1 m-1 leading-none cursor-pointer select-none whitespace-no-wrap h-6 px-1 hover:bg-gray-700 dark:hover:bg-gray-100 hover:text-gray-100 dark:hover:text-gray-700 data-[state=checked]:text-gray-700 data-[state=checked]:bg-white focus:outline-gray-700"
            >
              <SortSelect.OptionText>{option.label}</SortSelect.OptionText>
            </SortSelect.Option>
          ))}
        </SortSelect.Viewport>
      </SortSelect.Content>
    </SortSelect.Root>
  );
};

export default SortOrder;
