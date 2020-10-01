import React, { useState, useEffect } from 'react';
import classNames from "classnames";

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [hidden, setHidden] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [linkHovered, setLinkHovered] = useState(false)
    const [linkHoveredViewMore, setLinkHoveredViewMore] = useState(false)

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvents();
        handleLinkHoverEventsViewMore();
        return () => removeEventListeners();
    }, [])

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("mouseup", onMouseUp);
    }
    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseenter", onMouseEnter);
        document.removeEventListener("mouseleave", onMouseLeave);
        document.removeEventListener("mousedown", onMouseDown);
        document.removeEventListener("mouseup", onMouseUp);
    }
    const handleLinkHoverEvents = () => {
        document.querySelectorAll("a").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHovered(true));
            el.addEventListener("mouseout", () => setLinkHovered(false));
        })
    }
    const handleLinkHoverEventsViewMore = () => {
        document.querySelectorAll(".view_more").forEach(el => {
            el.addEventListener("mouseover", () => setLinkHoveredViewMore(true));
            el.addEventListener("mouseout", () => setLinkHoveredViewMore(false));
        })
    }

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }
    const onMouseLeave = (e) => {
        setHidden(true);
    }
    const onMouseEnter = (e) => {
        setHidden(false);
    }
    const onMouseDown = (e) => {
        setClicked(true);
    }
    const onMouseUp = (e) => {
        setClicked(false);
    }


    const cursorClasses = classNames(
        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--hidden': hidden,
            'cursor--link-hovered': linkHovered,
            'cursor--link-hovered-view-more': linkHoveredViewMore
        }
    )

    return (
        <div
            className={cursorClasses}
            style={{
                left: `${position.x}.px`,
                top: `${position.y}.px`
            }}    
        >

        </div>
    )
}

export default Cursor