export default function startPage(){
    const sp = `
   
<div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full"
    data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
    <header class="topbar" data-navbarbg="skin6">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
            <div class="navbar-header" data-logobg="skin6">
                <a class="navbar-brand ms-4" href="index.html">
                    <!-- Logo icon -->
                    <b class="logo-icon">
                        <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                        <!-- Dark Logo icon -->
                        <img src="../assets/images/logo-light-icon.png" alt="homepage" class="dark-logo" />

                    </b>
                    <!--End Logo icon -->
                    <!-- Logo text -->
                    <span class="logo-text">
                        <!-- dark Logo text -->
                        <img src="../assets/images/logo-light-text.png" alt="homepage" class="dark-logo" />

                    </span>
                </a>
                <a class="nav-toggler waves-effect waves-light text-white d-block d-md-none"
                    href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
            </div>
            <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                <ul class="navbar-nav d-lg-none d-md-block ">
                    <li class="nav-item">
                        <a class="nav-toggler nav-link waves-effect waves-light text-white "
                            href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
                    </li>
                </ul>

                <ul class="navbar-nav me-auto mt-md-0 ">
                    <li class="nav-item search-box">
                        <a class="nav-link text-muted" href="javascript:void(0)"><i class="ti-search"></i></a>
                        <form class="app-search" style="display: none;">
                            <input type="text" class="form-control" placeholder="Search &amp; enter"> <a
                                class="srh-btn"><i class="ti-close"></i></a> </form>
                    </li>
                </ul>

                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      
                            <div  alt="user" class="nav-link dropdown-toggle text-muted waves-effect waves-dark" id=logout>登出</div>
                     
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <aside class="left-sidebar" data-sidebarbg="skin6">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" id=product><i class="mdi me-2 mdi-table"></i>
                    <span class="hide-menu">產品資料</span></a></li>   
                
                
                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" id=user><i class="mdi me-2 mdi-table"></i>
                    <span class="hide-menu">使用者資料</span></a></li>   

                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" id=cart><i class="mdi me-2 mdi-table"></i>
                    <span class="hide-menu">訂單資料</span></a></li>   
                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" id=review><i class="mdi me-2 mdi-table"></i>
                    <span class="hide-menu">評價表單</span></a></li>   
                    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false" id=question><i class="mdi me-2 mdi-table"></i>
                    <span class="hide-menu">問題表單</span></a></li>   
                </ul>
            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>
    <div class="page-wrapper">
        <div class="container-fluid">
            <div id=content></div>   
        </div>    
    </div>
</div>

    
    `;
    return sp;
}