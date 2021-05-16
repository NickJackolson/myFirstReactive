import React from 'react'
import User from './User'

export default function Navbar() {
    return (
        <div>
            <User
            companyName = "Asisguard"
            duration = "1 year and 11 months"
            position = "Software Developer"
            />
            <User
            companyName = "Sigun"
            duration = "1 Month"
            position = "Intern"
            />
        </div>
    )
}
