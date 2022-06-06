import { Search } from "react-feather";
import styles from "../styles/SearchBar.module.scss";

type SearchBarProps = {
    input: string,
    setInput: Function,
}

const SearchBar = ({input, setInput}: SearchBarProps) => {

    return (
        <input 
            type="text" 
            id={styles.searchBar}
            placeholder="Search for a post..." 
        />
    )
}

export default SearchBar;