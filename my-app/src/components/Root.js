
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { fetchBlogsPosts } from '../api/api';
import Blogs from './Blogs';

export default function Root({ repos }) {
    const perPageOptions = [10, 20, 50]
    const [perPage, setPerPage] = useState(10);
    const [blogs, setBlogs] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        setPerPage(parseInt(e.target.innerText));
    }
    const renderDropDownItems = () => {
        return perPageOptions.map(option => <Dropdown.Item onClick={handleClick}>{option}</Dropdown.Item>)
    }

    useEffect(() => {
        const fetchBlogs = async () => {
            const blogs = await fetchBlogsPosts(repos, perPage);
            setBlogs(blogs);
        }
        fetchBlogs();
    }, [perPage, repos]);

    return <>
        {`Showing ${perPage} blogs`}
        
        <DropdownButton id="dropdown-basic-button" title={`${perPage} Per Page`}>
            {renderDropDownItems()}
        </DropdownButton>

        <Blogs blogs={blogs} />


    </>;
}