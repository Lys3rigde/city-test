/* eslint-disable jsx-a11y/anchor-is-valid */
import { format } from 'date-fns';

export const Footer = () => {
        return (
            <footer className='footer'>
                <span className='footer__date'>
                    Ситимобил 2007 - {format(new Date(), 'yyyy')} Все права защищены
                </span>
                <a href="#" target='_blank' className='footer__link'>Пользовательское соглашение</a>
                <a href="#" target='_blank' className='footer__link'>Политика конфиденциальности</a>
            </footer>
        );
    }