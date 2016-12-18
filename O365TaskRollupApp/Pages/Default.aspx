﻿<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    
    <%--TODO : Get these in a smarter way e.g. web pack--%>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.33.3/es6-shim.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.16/system-polyfills.js"></script>
    <script type="text/javascript" src="https://code.angularjs.org/2.0.0-beta.0/angular2-polyfills.js"></script>
    <script type="text/javascript" src="https://code.angularjs.org/tools/system.js"></script>
    <script type="text/javascript" src="https://code.angularjs.org/2.0.0-beta.0/Rx.js"></script>
    <script type="text/javascript" src="https://code.angularjs.org/2.0.0-beta.0/angular2.dev.js"></script>

    <!-- Polyfill(s) for older browsers -->
    <script type="text/javascript" src="node_modules/core-js/client/shim.min.js"></script>
    <script type="text/javascript" src="node_modules/zone.js/dist/zone.js"></script>
    <script type="text/javascript" src="node_modules/reflect-metadata/Reflect.js"></script>
    <script type="text/javascript" src="node_modules/systemjs/dist/system.src.js"></script>
    <script type="text/javascript" src="systemjs.config.js"></script>
    <script type="text/javascript" >
        System.import('app').catch(function (err) { console.error(err); });
    </script>

</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    Page Title
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <app-main></app-main>

</asp:Content>
