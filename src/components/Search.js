import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/GithubContext";

export const Search = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const github = useContext(GithubContext);
    const onSubmit = (event) => {
        if(event.key !== 'Enter') {
            return
        }

        github.clearUsers();

        if(value.trim()) {
            alert.hide();
            github.search(value.trim());
        } else {
            alert.show('Enter user data')
        }
    };

    return(
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter user's nickname.."
                onKeyPress={onSubmit}
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
};