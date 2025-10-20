import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";



const routes=[
    {path: '/', breadcrumb:'Home'},
    {path: '/about', breadcrumb: 'About Us'},
    {path: '/dentists' , breadcrumb: 'Dentists'},
    {path: '/services' , breadcrumb: 'Services'}
    
];

const Breadcrumbs = () => {
   const breadcrumbs= useBreadcrumbs(routes);
   
   return(
  <nav className="breadcrumbs">
    {breadcrumbs.map(({match,breadcrumb}, index) => {
      const isLast = index === breadcrumbs.length - 1;
      return (
        <span key={match.pathname}>
          {isLast ? (
            <span className="current">{breadcrumb}</span>
          ) : (
            <Link to={match.pathname}>{breadcrumb}</Link>
          )}
          {index < breadcrumbs.length - 1 && <span aria-hidden="true"> /</span>}
        </span>
      );
    })}
  </nav>
);

};

export default Breadcrumbs