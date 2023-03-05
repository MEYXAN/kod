document.write(`
<header class="header">

        <div class="header_block">

            <img src="../image/Group.png" alt="Logo">

        </div>

        <div class="header_wrapper">

        <nav class="header_wrapper__nav1">

        <a href="../à propos/index.html">à propos</a>

        <a href="../Initiatives/index.html">Initiatives</a>

        <a href="../témoignages/témoignages.html">témoignages</a>

        <a href="../balados/balados.html">balados</a>

    </nav>

    <nav class="header_wrapper__nav2">

    <a href="../index.html" class="nav_e"><img src="../image/Frame.png" alt=""></a>

        </nav>

        </div>
        
    </header>

    <style>

    .header{
        height: 114px;
        max-width: 1440px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:#2DC67C;
    }
    
    .header_block{
        margin:40px 40px;
    }
    
    .header_wrapper{
        margin-right: 41px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .header_wrapper__nav1 a{
        font-size: 12px;
        font-weight: 900;
        color: #000000;
        margin-left: 49px;
    }
    
    .header_wrapper__nav1{
        margin-right: 33px;
    }

    </style>
`)