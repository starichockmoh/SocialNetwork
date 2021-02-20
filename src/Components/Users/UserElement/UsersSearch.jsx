import React, {useState} from "react";
import './UsersSearch.css'
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const UsersSearch = (props) => {
    let [SearchText, ChangeSearchText] = useState('')
    const onChangeSearchText = (e) => {
        ChangeSearchText(e.target.value)
    }
    const ActiveSearch = () => {
        props.SearchRequest(props.currentPage,props.pageSize,false,SearchText)

    }
    return <div>

        <span><input value={SearchText} onChange={onChangeSearchText}/>
          <Button className='SearchButton' type="primary" icon={<SearchOutlined />} onClick={ActiveSearch}>
            Search
        </Button>
        </span>
    </div>
}

export default UsersSearch