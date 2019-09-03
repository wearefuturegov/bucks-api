import React from "react"
import "./style.scss"

export const Column = ({ children }) => 
    <aside className="columns-with-divider__column">
        {children}
    </aside>

export const ColumnsWithDivider = ({ children }) => 
    <div className="columns-with-divider container">
        {children}
    </div>
