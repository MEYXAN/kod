document.write(
    `   <footer class="footer">

    <div class="footer_block">

        <img class="imga" src="../image/ол.png" alt="qwer">

        <img class="imgi" src="../image/Frame (3).png" alt="wkhwh">

        <img class="imga" src="../image/Frame (1).png" alt="gwgwh">

        <div class="footer_block_son">

            <span class="footer_block_son_sp">Nous joindre</span>

            <p class="footer_block_son_text">5955, rue Saint-Laurent, bureau 204, Lévis (QC) Canada G6V 3P5</p>

            <a class="footer_block_son_link" href="(418) 835-3710">(418) 835-3710</a>

            <a class="footer_block_son_link" href="info@effet.coop">info@effet.coop</a>

        </div>

        <div class="sons">

            <span class="sons_sp">suivez-nous</span>

            <div class="sons_block">

            <img src="../image/facebook.png" alt="face">

            <img src="../image/insta.png" alt="inta">

            </div>

        </div>

    </div>

    <div class="footer_wrapper">

        <span class="footer_wrapper_sp">© 2020 - Effet COOP</span>

        <span class="footer_wrapper_sp1">Design et réalisation: MamboMambo</span>

    </div>

</footer>

    <style>
    
    .footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 1440px;
        height: 225px;
        background-color: #FFFFFF;
    }
    
    .footer_block{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .footer_block_son{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 34px;
    }
    
    .footer_block_son_sp{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: 900;
        color: #000000;
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 14px;
        margin-left: -220px;
    }
    
    .footer_block_son_text{
        color: #000000;
        width: 308px;
        font-family: monospace;
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        margin-top: 5px;
        line-height: 16px;
    }
    
    .footer_block_son_link{
        margin-left: -220px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        margin-bottom: 5px;
        color: #000000;
        font-weight: 400;
        font-size: 12px;
        line-height:16px;
    }
    
    
    .imga{
        margin-left: 146px;
    }
    
    .imgi{
        margin-left: 125px;
    }
    
    .sons_sp{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-style: normal;
        font-weight: 900;
        color: #000000;
        letter-spacing: 1px;
        font-size: 14px;
        line-height: 14px;
        width: 91px;
        display: block;
        margin-top: -50px;
    }
    
    .sons_block{
        margin-top: 7px;
    }
    
    .sons{
        display: flex;
        flex-direction: column;
        margin-left: 49px;
        margin-right: 113px;
    }
    
    .footer_wrapper{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    
    .footer_wrapper_sp{
        color: #000000;
        font-family: monospace;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        margin-right: 810px;
    }
    

    </style>

`

)