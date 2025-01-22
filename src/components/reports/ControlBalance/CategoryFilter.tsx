// import * as React from 'react';
// import { CategoryData } from './type';


// interface CategoryFilterProps {
//   categories: CategoryData[];
// }

// export function CategoryFilter({ categories }: CategoryFilterProps) {
//   return (
//     <div className="flex flex-wrap gap-3 mt-3 mr-8 whitespace-nowrap max-md:mr-2.5 max-md:max-w-full">
//       <div className="flex overflow-hidden flex-wrap flex-auto gap-2.5 items-start p-5 text-base font-light tracking-wide text-white rounded-md max-md:max-w-full">
//         {categories.map((category, index) => (
//           <button
//             key={index}
//             className="flex flex-1 shrink gap-4 items-center px-8 py-1.5 rounded-md basis-0 bg-neutral-700 min-h-[32px] max-md:px-5"
//             aria-label={`Filter by ${category.label}`}
//           >
//             {category.icon && (
//               <img src={category.icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[1.25]" />
//             )}
//             <div className="self-stretch my-auto">{category.label}</div>
//             {category.hasDropdown && (
//               <img src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/88cd06c805f15897d9e4f673647491c8790a6cc3e9758472a2378477c407449e?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[0.42] w-[5px]" />
//             )}
//           </button>
//         ))}
//       </div>
//       <div className="flex flex-auto gap-1 items-center p-2 my-auto text-xs leading-none border border-gray-700 border-solid bg-zinc-700 rounded-[32px] text-slate-400">
//         <img src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e2482ddd8588ea8745953fa897ce7266e621823b2ea1d33544a9b0565ee87e4d?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&" alt="" className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square" />
//         <input
//           type="search"
//           placeholder="Search"
//           aria-label="Search transactions"
//           className="bg-transparent border-none outline-none text-slate-400"
//         />
//       </div>
//     </div>
//   );
// }


import * as React from 'react';
import { CategoryData } from './type';

interface CategoryFilterProps {
  categories: CategoryData[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-4 mt-3 mr-8 max-md:mr-2.5">
      {/* Categorías */}
      <div className="flex flex-wrap gap-2.5 items-center text-sm font-medium text-white bg-neutral-800 rounded-lg p-3 max-md:overflow-x-scroll">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors min-w-[120px] max-w-full"
            aria-label={`Filter by ${category.label}`}
          >
            {category.icon ? (
              <img
                src={category.icon}
                alt={`${category.label} icon`}
                className="w-6 h-6 object-contain"
              />
            ) : (
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-xs font-bold">
                {category.label[0].toUpperCase()}
              </div>
            )}
            <span>{category.label}</span>
            {category.hasDropdown && (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/88cd06c805f15897d9e4f673647491c8790a6cc3e9758472a2378477c407449e?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
                alt=""
                className="w-3 h-3"
              />
            )}
          </button>
        ))}
      </div>

      {/* Búsqueda */}
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-700 rounded-full border border-gray-600 text-slate-400 flex-grow">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e2482ddd8588ea8745953fa897ce7266e621823b2ea1d33544a9b0565ee87e4d?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&"
          alt="Search icon"
          className="w-5 h-5"
        />
        <input
          type="search"
          placeholder="Search"
          aria-label="Search transactions"
          className="w-full bg-transparent outline-none border-none placeholder:text-slate-500 text-white"
        />
      </div>

    </div>
  );
}

