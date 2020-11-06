import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getInformation } from '../../services'

export const Information = ({ name }) => {
    const [information, setInformation] = useState({});
    useEffect(() => {
        let mounted = true
        getInformation(name).then(data => {
            if(mounted) {
                setInformation(data)
            }
        });
        return () => {
            mounted = false;
        }
    }, [name])
    return (
        <div>
            <h2>Information</h2>
            <ul>
                <li>continent: {information?.continent}</li>
                <li>Length: {information?.length}</li>
                <li>Outflow: {information?.outflow}</li>
            </ul>
        </div>
    )
}

Information.propTypes = {
    name: PropTypes.string.isRequired
}