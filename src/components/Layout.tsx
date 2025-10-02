import React from 'react'
import { Link } from 'react-router'

interface StyledLinkProps {
    to: string,
    text: string
}

const StyledLink = ({ to, text }: StyledLinkProps) => <Link to={to} className="p-4 border-red-100 border-b-2 hover:font-bold hover:underline">{text}</Link>

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex min-h-screen">
        <div className="min-w-60 bg-red-50 py-8 px-4 flex flex-col text-center">
            <StyledLink to="/" text="Home" />
            <StyledLink to="/letterboxd-img" text="Letterboxd Image Generator" />
        </div>
        <div className="p-8" >
            {props.children}
        </div>
    </div>
  )
}
