import React, { useEffect, ComponentType } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Location } from 'history';

const isAuthPage = (pathname: string): boolean => pathname === '/auth';

export function withAppRouterHandler<T>(Component: ComponentType<T>) {
  return (props: T) => {
    const router = useHistory();

    useEffect(() => {
      const routerChangeHandler = (location: Location): void => {
        const isAuth = Boolean(Cookies.get('auth'));

        if (!isAuth && !isAuthPage(location.pathname)) router.push('/auth');
        if (isAuth && isAuthPage(location.pathname)) router.push('/');
      };

      routerChangeHandler(router.location);

      router.listen(routerChangeHandler);
    }, []);

    return <Component {...props} />;
  };
}
