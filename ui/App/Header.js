import React, { Component } from 'react'
import Link from 'react-router'
import styles from './Header.scss'

export default class Header extends Component {
  render() {
    return (
      <header className={styles['header']}>
        <nav>
          <Link to={{pathname:'/'}} 
                className={styles['brand']}>
                React Wiki!
          </Link>
          <ul className={styles['menu']}>
            <li className={styles['menu__item']}>
              <Link to={{pathname:'/pages'}} 
                    className={styles['menu__link']}>
                    All Pages
              </Link>
            </li>
            <li className={styles['menu__item']}>
              <Link
                to={{pathname: '/'}}
                className={styles['menu__link']}>
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
