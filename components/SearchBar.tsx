import { Search } from "react-feather";
import styles from "../styles/SearchBar.module.scss";

type SearchBarProps = {
    input: string,
    setInput: Function,
}

const SearchBar = ({input, setInput}: SearchBarProps) => {

    console.log(input);

    return (
        <input 
            type="text" 
            id={styles.searchBar}
            placeholder="Search for a post..." 
            value={input}
            onChange={e => setInput(e.target.value)}
        />
    )
}

export default SearchBar;