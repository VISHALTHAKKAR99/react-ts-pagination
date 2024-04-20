
# react-ts-paginations

React pagination is a very simple yet configurable pagination component built with React + Typescript.



## Installation

Install this package

```bash
  npm i react-ts-paginations
  cd my-project
```
    
## Usage/Examples

```javascript
import {Pagination} from 'react-ts-paginations'

function App() {
    const [data, setData] = useState();
    const [filteredDataArr, setFilteredDataArr] = useState();
    const [filterData, setFilterData] = useState({
        limit: 10, 
        page: 1,
    });
    

    //if use dropdown per page
    const SHOW_PAGE_COUNT = [10, 20, 30, 40, 50];
    const onPageDrpSelect = (e: string) => {
        const updatedFilterData = {
            ...filterData,
            limit: parseInt(e),
            page: 1,
        };
        setFilterData(updatedFilterData);
    };

    const handlePageChange = useCallback((newPage: number): void => {
        const updatedFilterData = {
            ...filterData,
            page: newPage,
        };
        setFilterData(updatedFilterData);
    }, [filterData]);

   useEffect(() => {
        const start = (filterData.page - 1) * filterData.limit;
        const end = start + filterData.limit;
        filteredDataArr(users.slice(start, end));
    }, [users, filterData]);

    useEffect(() => {
        //api call
    }, []);

 const totalPages = Math.ceil(users.length / filterData.limit);


  return (
      <>
        //if show the per page dropdown 

         <select value={filterData.limit} class="custom-style"
                onChange={(e) => onPageDrpSelect(e.target.value)}>
                {SHOW_PAGE_COUNT.map((item: number) => (
                    <option key={item}>{item}</option>
                ))}
            </select>

             <Pagination currentPage={filterData.page} totalPages={totalPages} onPageChange={handlePageChange}/>
       
      </>
  )
}
```


## CSS Design Select
```javascript
.custom-style {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  color: #4b5563;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  background-color: #ffffff;
  border-color: #a5b4fc;
}

## Authors

- [@Vishal](https://github.com/VISHALTHAKKAR99)


## Contributing

Contributions are always welcome!
