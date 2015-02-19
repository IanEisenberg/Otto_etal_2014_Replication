


<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>mmturkey/mmturkey.js at master · longouyang/mmturkey</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="longouyang/mmturkey" name="twitter:title" /><meta content="mmturkey - A tiny library for sending data from external webpages to Amazon&amp;#39;s Mechanical Turk." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/14802?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/14802?v=3&amp;s=400" property="og:image" /><meta content="longouyang/mmturkey" property="og:title" /><meta content="https://github.com/longouyang/mmturkey" property="og:url" /><meta content="mmturkey - A tiny library for sending data from external webpages to Amazon&#39;s Mechanical Turk." property="og:description" />
      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="AB42D00A:0FF2:B01CEE0:54E673AA" name="octolytics-dimension-request_id" /><meta content="9325440" name="octolytics-actor-id" /><meta content="IanEisenberg" name="octolytics-actor-login" /><meta content="0533ab4445b940f298a3987b46c9decb7eac475d9bd5bf955873607be1b89d22" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="o8BN/phy8/QANDeEBbYBJdVED24LRAlSCOhwe1l0XkacmNusCV80cezHc8HmcuWs9BONvqgS1t5fUvXl2B+lCA==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-5babf25e3161fe5231c33e09fef433d57ceb643fe0850efd515f6139e9a2419b.css" media="all" rel="stylesheet" />
    <link href="https://assets-cdn.github.com/assets/github2-a34ea5f36919335b720f812ba66ac87065665d8d6d759d6f237e7129ba34edb6.css" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="c37e13d674ae404af2a6b94216ec321a">

      
  <meta name="description" content="mmturkey - A tiny library for sending data from external webpages to Amazon&#39;s Mechanical Turk.">
  <meta name="go-import" content="github.com/longouyang/mmturkey git https://github.com/longouyang/mmturkey.git">

  <meta content="14802" name="octolytics-dimension-user_id" /><meta content="longouyang" name="octolytics-dimension-user_login" /><meta content="2513707" name="octolytics-dimension-repository_id" /><meta content="longouyang/mmturkey" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2513707" name="octolytics-dimension-repository_network_root_id" /><meta content="longouyang/mmturkey" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/longouyang/mmturkey/commits/master.atom" rel="alternate" title="Recent Commits to mmturkey:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/longouyang/mmturkey/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/longouyang/mmturkey/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/IanEisenberg" data-ga-click="Header, go to profile, text:username">
      <img alt="IanEisenberg" class="avatar" data-user="9325440" height="20" src="https://avatars3.githubusercontent.com/u/9325440?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">IanEisenberg</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new" data-ga-click="Header, create new repository, icon:repo"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new" data-ga-click="Header, create new organization, icon:organization"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="longouyang/mmturkey">This repository</span>
    </li>
      <li>
        <a href="/longouyang/mmturkey/issues/new" data-ga-click="Header, create new issue, icon:issue"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status all-read"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="hXodeloWJkz6ifK6lN8bEG/IorW4Ef/ZFuOSp3gFKiesv/QFhq2IMXsNdnEOoDbqO8aVRQK3px/pkoFH4ZOOHA==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

  <li>
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="TlPIDcOg5plEtADUBDVmUvevpspL4GDGn3reKpal7+OCQDNzw/ZBsc/TszDZE9r5qhlkqD196fAA+0XW2H0kyA==" /></div>    <input id="repository_id" name="repository_id" type="hidden" value="2513707" />

      <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/longouyang/mmturkey/watchers">
          1
        </a>
        <a href="/longouyang/mmturkey/subscription"
          class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
          <span class="js-select-button">
            <span class="octicon octicon-eye"></span>
            Watch
          </span>
        </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="select-menu-title">Notifications</span>
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
            </div>

            <div class="select-menu-list js-navigation-container" role="menu">

              <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                  <span class="select-menu-item-heading">Not watching</span>
                  <span class="description">Be notified when participating or @mentioned.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Watch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                  <span class="select-menu-item-heading">Watching</span>
                  <span class="description">Be notified of all conversations.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-eye"></span>
                    Unwatch
                  </span>
                </div>
              </div>

              <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                <span class="select-menu-item-icon octicon octicon-check"></span>
                <div class="select-menu-item-text">
                  <input id="do_ignore" name="do" type="radio" value="ignore" />
                  <span class="select-menu-item-heading">Ignoring</span>
                  <span class="description">Never be notified.</span>
                  <span class="js-select-button-text hidden-select-button-text">
                    <span class="octicon octicon-mute"></span>
                    Stop ignoring
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
</form>

  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/longouyang/mmturkey/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BoZ9489c0/RBWyJ0dVkdnye+Ntz9wyf4DtVRKuPeF+UahRBvkEYytg6+XOwETUL6IcHkrODJgY8Ws14ALo96oQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar longouyang/mmturkey">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/longouyang/mmturkey/stargazers">
          7
        </a>
</form>
    <form accept-charset="UTF-8" action="/longouyang/mmturkey/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="KjiTidwAXbcmdTvhnfzaz/fFez9VZJB6aKVF3iT6A4EVQCENhICMoWlqtOfdd7AHNr/QftKgr8zkloRcXIhVUw==" /></div>
      <button
        class="minibutton with-count js-toggler-target"
        aria-label="Star this repository" title="Star longouyang/mmturkey">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/longouyang/mmturkey/stargazers">
          7
        </a>
</form>  </div>

  </li>

        <li>
          <a href="/longouyang/mmturkey/fork" class="minibutton with-count js-toggler-target tooltipped-n" title="Fork your own copy of longouyang/mmturkey to your account" aria-label="Fork your own copy of longouyang/mmturkey to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/longouyang/mmturkey/network" class="social-count">3</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/longouyang" class="url fn" itemprop="url" rel="author"><span itemprop="title">longouyang</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/longouyang/mmturkey" class="js-current-repository" data-pjax="#js-repo-pjax-container">mmturkey</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/longouyang/mmturkey/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/longouyang/mmturkey" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /longouyang/mmturkey">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/longouyang/mmturkey/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /longouyang/mmturkey/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/longouyang/mmturkey/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /longouyang/mmturkey/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/longouyang/mmturkey/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /longouyang/mmturkey/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/longouyang/mmturkey/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /longouyang/mmturkey/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/longouyang/mmturkey/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /longouyang/mmturkey/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/assets/spinners/octocat-spinner-32-e513294efa576953719e4e2de888dd9cf929b7d62ed8d05f25e731d02452ab6c.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/longouyang/mmturkey.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:longouyang/mmturkey.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/longouyang/mmturkey" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/longouyang/mmturkey" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save longouyang/mmturkey to your computer and use it in GitHub Desktop." aria-label="Save longouyang/mmturkey to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/longouyang/mmturkey/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of longouyang/mmturkey as a zip file"
                   title="Download the contents of longouyang/mmturkey as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/longouyang/mmturkey/blob/bb5ec56ff1fee12eccb747fabdb11b5ea6b85198/mmturkey.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:ebce906ef259aed5e52607146a4b84a0 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/longouyang/mmturkey/blob/gh-pages/mmturkey.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/longouyang/mmturkey/blob/master/mmturkey.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/longouyang/mmturkey/tree/0.6/mmturkey.js"
                 data-name="0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.6">0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/longouyang/mmturkey/tree/0.5.1/mmturkey.js"
                 data-name="0.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.1">0.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/longouyang/mmturkey/tree/0.5/mmturkey.js"
                 data-name="0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5">0.5</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="button-group right">
    <a href="/longouyang/mmturkey/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/longouyang/mmturkey" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">mmturkey</span></a></span></span><span class="separator">/</span><strong class="final-path">mmturkey.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Long Ouyang" class="avatar" data-user="14802" height="24" src="https://avatars3.githubusercontent.com/u/14802?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/longouyang" rel="author">longouyang</a></span>
        <time datetime="2012-04-22T00:57:16Z" is="relative-time">Apr 21, 2012</time>
        <div class="commit-title">
            <a href="/longouyang/mmturkey/commit/e707df8b80a975848df1d77afa8327764b4ced60" class="message" data-pjax="true" title="Protect submit() from null object, add unwrap option. Also:

-Add (but don&#39;t currently use) htmlification for tables (arrays of objects)
-Some refactoring
-Update README">Protect submit() from null object, add unwrap option. Also:</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Long Ouyang" data-user="14802" height="24" src="https://avatars3.githubusercontent.com/u/14802?v=3&amp;s=48" width="24" />
            <a href="/longouyang">longouyang</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
    <div class="file-info">
        258 lines (218 sloc)
        <span class="file-info-divider"></span>
      10.001 kb
    </div>
    <div class="file-actions">
      <div class="button-group">
        <a href="/longouyang/mmturkey/raw/master/mmturkey.js" class="minibutton " id="raw-url">Raw</a>
          <a href="/longouyang/mmturkey/blame/master/mmturkey.js" class="minibutton js-update-url-with-hash">Blame</a>
        <a href="/longouyang/mmturkey/commits/master/mmturkey.js" class="minibutton " rel="nofollow">History</a>
      </div><!-- /.button-group -->

        <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
           href="http://mac.github.com"
           data-url="github-mac://openRepo/https://github.com/longouyang/mmturkey?branch=master&amp;filepath=mmturkey.js"
           aria-label="Open this file in GitHub for Mac"
           data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
            <span class="octicon octicon-device-desktop"></span>
        </a>

            <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
               aria-label="Clicking this button will fork this project so you can edit the file"
               href="/longouyang/mmturkey/edit/master/mmturkey.js"
               data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger tooltipped tooltipped-s"
             href="/longouyang/mmturkey/delete/master/mmturkey.js"
             aria-label="Fork this project and delete file"
             data-method="post" data-test-id="delete-blob-file" rel="nofollow">
        <span class="octicon octicon-trashcan"></span>
      </a>
    </div><!-- /.actions -->
  </div>
  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-c">// Bundle in Crockford&#39;s JSON2.js</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="pl-s">var</span> JSON;JSON<span class="pl-k">||</span>(JSON<span class="pl-k">=</span>{});</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">(<span class="pl-st">function</span>(){<span class="pl-st">function</span> <span class="pl-en">k</span>(<span class="pl-vpf">a</span>){<span class="pl-k">return</span> a<span class="pl-k">&lt;</span><span class="pl-c1">10</span><span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a<span class="pl-k">:</span>a}<span class="pl-st">function</span> <span class="pl-en">o</span>(<span class="pl-vpf">a</span>){p.<span class="pl-sc">lastIndex</span><span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">return</span> p.<span class="pl-s3">test</span>(a)<span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>a.<span class="pl-s3">replace</span>(p,<span class="pl-st">function</span>(<span class="pl-vpf">a</span>){<span class="pl-s">var</span> c<span class="pl-k">=</span>r[a];<span class="pl-k">return</span> <span class="pl-k">typeof</span> c<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>c<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>u<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>0000<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a.<span class="pl-s3">charCodeAt</span>(<span class="pl-c1">0</span>).<span class="pl-s3">toString</span>(<span class="pl-c1">16</span>)).<span class="pl-s3">slice</span>(<span class="pl-k">-</span><span class="pl-c1">4</span>)})<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>a<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>}<span class="pl-st">function</span> <span class="pl-en">l</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">j</span>){<span class="pl-s">var</span> c,d,h,m,g<span class="pl-k">=</span>e,f,b<span class="pl-k">=</span>j[a];b<span class="pl-k">&amp;&amp;typeof</span> b<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;typeof</span> b.toJSON<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span>b.toJSON(a));<span class="pl-k">typeof</span> i<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span>(b<span class="pl-k">=</span>i.<span class="pl-s3">call</span>(j,a,b));<span class="pl-k">switch</span>(<span class="pl-k">typeof</span> b){<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">return</span> o(b);<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-s3">isFinite</span>(b)<span class="pl-k">?</span><span class="pl-s3">String</span>(b)<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span>;<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>boolean<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-s3">String</span>(b);<span class="pl-k">case</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-k">if</span>(<span class="pl-k">!</span>b)<span class="pl-k">return</span><span class="pl-s1"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">e<span class="pl-k">+=</span>n;f<span class="pl-k">=</span>[];<span class="pl-k">if</span>(<span class="pl-s3">Object</span>.<span class="pl-sc">prototype</span>.toString.<span class="pl-s3">apply</span>(b)<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>[object Array]<span class="pl-pds">&quot;</span></span>){m<span class="pl-k">=</span>b.<span class="pl-sc">length</span>;<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span>m;c<span class="pl-k">+=</span><span class="pl-c1">1</span>)f[c]<span class="pl-k">=</span>l(c,b)<span class="pl-k">||</span><span class="pl-s1"><span class="pl-pds">&quot;</span>null<span class="pl-pds">&quot;</span></span>;h<span class="pl-k">=</span>f.<span class="pl-sc">length</span><span class="pl-k">===</span><span class="pl-c1">0</span><span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>[]<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>e<span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>[<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>e<span class="pl-k">+</span>f.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>e)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>g<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>f.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>;e<span class="pl-k">=</span>g;<span class="pl-k">return</span> h}<span class="pl-k">if</span>(i<span class="pl-k">&amp;&amp;typeof</span> i<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span>){m<span class="pl-k">=</span>i.<span class="pl-sc">length</span>;<span class="pl-k">for</span>(c<span class="pl-k">=</span><span class="pl-c1">0</span>;c<span class="pl-k">&lt;</span>m;c<span class="pl-k">+=</span><span class="pl-c1">1</span>)<span class="pl-k">typeof</span> i[c]<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span>(d<span class="pl-k">=</span>i[c],(h<span class="pl-k">=</span>l(d,b))<span class="pl-k">&amp;&amp;</span>f.<span class="pl-s3">push</span>(o(d)<span class="pl-k">+</span>(e<span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span>h))}<span class="pl-k">else</span> <span class="pl-k">for</span>(d <span class="pl-k">in</span> b)<span class="pl-s3">Object</span>.<span class="pl-sc">prototype</span>.hasOwnProperty.<span class="pl-s3">call</span>(b,d)<span class="pl-k">&amp;&amp;</span>(h<span class="pl-k">=</span>l(d,b))<span class="pl-k">&amp;&amp;</span>f.<span class="pl-s3">push</span>(o(d)<span class="pl-k">+</span>(e<span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span>h);h<span class="pl-k">=</span>f.<span class="pl-sc">length</span><span class="pl-k">===</span><span class="pl-c1">0</span><span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>{}<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>e<span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>{<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>e<span class="pl-k">+</span>f.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>e)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>g<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>{<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>f.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="pl-s1"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span>;e<span class="pl-k">=</span>g;<span class="pl-k">return</span> h}}<span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-s3">Date</span>.<span class="pl-sc">prototype</span>.toJSON<span class="pl-k">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)<span class="pl-s3">Date</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">toJSON</span><span class="pl-k">=</span><span class="pl-st">function</span>(){<span class="pl-k">return</span> <span class="pl-s3">isFinite</span>(<span class="pl-v">this</span>.<span class="pl-s3">valueOf</span>())<span class="pl-k">?</span><span class="pl-v">this</span>.<span class="pl-s3">getUTCFullYear</span>()<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>k(<span class="pl-v">this</span>.<span class="pl-s3">getUTCMonth</span>()<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>k(<span class="pl-v">this</span>.<span class="pl-s3">getUTCDate</span>())<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>T<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>k(<span class="pl-v">this</span>.<span class="pl-s3">getUTCHours</span>())<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>k(<span class="pl-v">this</span>.<span class="pl-s3">getUTCMinutes</span>())<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>:<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>k(<span class="pl-v">this</span>.<span class="pl-s3">getUTCSeconds</span>())<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>Z<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">null</span>},<span class="pl-s3">String</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">toJSON</span><span class="pl-k">=</span><span class="pl-s3">Number</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">toJSON</span><span class="pl-k">=</span><span class="pl-s3">Boolean</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">toJSON</span><span class="pl-k">=</span><span class="pl-st">function</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.<span class="pl-s3">valueOf</span>()};<span class="pl-s">var</span> q<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\u</span>0000<span class="pl-cce">\u</span>00ad<span class="pl-cce">\u</span>060<span class="pl-c1">0-<span class="pl-cce">\u</span></span>0604<span class="pl-cce">\u</span>070f<span class="pl-cce">\u</span>17b4<span class="pl-cce">\u</span>17b5<span class="pl-cce">\u</span>200<span class="pl-c1">c-<span class="pl-cce">\u</span></span>200f<span class="pl-cce">\u</span>202<span class="pl-c1">8-<span class="pl-cce">\u</span></span>202f<span class="pl-cce">\u</span>206<span class="pl-c1">0-<span class="pl-cce">\u</span></span>206f<span class="pl-cce">\u</span>feff<span class="pl-cce">\u</span>fff<span class="pl-c1">0-<span class="pl-cce">\u</span></span>ffff]</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">p<span class="pl-k">=</span><span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\\\&quot;\x</span>0<span class="pl-c1">0-<span class="pl-cce">\x</span></span>1f<span class="pl-cce">\x</span>7<span class="pl-c1">f-<span class="pl-cce">\x</span></span>9f<span class="pl-cce">\u</span>00ad<span class="pl-cce">\u</span>060<span class="pl-c1">0-<span class="pl-cce">\u</span></span>0604<span class="pl-cce">\u</span>070f<span class="pl-cce">\u</span>17b4<span class="pl-cce">\u</span>17b5<span class="pl-cce">\u</span>200<span class="pl-c1">c-<span class="pl-cce">\u</span></span>200f<span class="pl-cce">\u</span>202<span class="pl-c1">8-<span class="pl-cce">\u</span></span>202f<span class="pl-cce">\u</span>206<span class="pl-c1">0-<span class="pl-cce">\u</span></span>206f<span class="pl-cce">\u</span>feff<span class="pl-cce">\u</span>fff<span class="pl-c1">0-<span class="pl-cce">\u</span></span>ffff]</span><span class="pl-pds">/</span>g</span>,e,n,r<span class="pl-k">=</span>{<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>0008<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>b<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\t</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>t<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>n<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\u</span>000c<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>f<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\r</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>r<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span>&quot;<span class="pl-pds">&#39;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\\\</span><span class="pl-pds">&quot;</span></span>},i;<span class="pl-k">if</span>(<span class="pl-k">typeof</span> JSON.stringify<span class="pl-k">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)<span class="pl-s3">JSON</span>.<span class="pl-en">stringify</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">j</span>,<span class="pl-vpf">c</span>){<span class="pl-s">var</span> d;n<span class="pl-k">=</span>e<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-k">if</span>(<span class="pl-k">typeof</span> c<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span>)<span class="pl-k">for</span>(d<span class="pl-k">=</span><span class="pl-c1">0</span>;d<span class="pl-k">&lt;</span>c;d<span class="pl-k">+=</span><span class="pl-c1">1</span>)n<span class="pl-k">+=</span><span class="pl-s1"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>;<span class="pl-k">else</span> <span class="pl-k">typeof</span> c<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span>(n<span class="pl-k">=</span>c);<span class="pl-k">if</span>((i<span class="pl-k">=</span>j)<span class="pl-k">&amp;&amp;typeof</span> j<span class="pl-k">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">&amp;&amp;</span>(<span class="pl-k">typeof</span> j<span class="pl-k">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span><span class="pl-k">||typeof</span> j.<span class="pl-sc">length</span><span class="pl-k">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span>))<span class="pl-k">throw</span> Error(<span class="pl-s1"><span class="pl-pds">&quot;</span>JSON.stringify<span class="pl-pds">&quot;</span></span>);<span class="pl-k">return</span> l(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">{<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>a})};<span class="pl-k">if</span>(<span class="pl-k">typeof</span> JSON.parse<span class="pl-k">!==</span><span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>)<span class="pl-s3">JSON</span>.<span class="pl-en">parse</span><span class="pl-k">=</span><span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">e</span>){<span class="pl-st">function</span> <span class="pl-en">c</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">d</span>){<span class="pl-s">var</span> g,f,b<span class="pl-k">=</span>a[d];<span class="pl-k">if</span>(b<span class="pl-k">&amp;&amp;typeof</span> b<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span>)<span class="pl-k">for</span>(g <span class="pl-k">in</span> b)<span class="pl-s3">Object</span>.<span class="pl-sc">prototype</span>.hasOwnProperty.<span class="pl-s3">call</span>(b,g)<span class="pl-k">&amp;&amp;</span>(f<span class="pl-k">=</span>c(b,g),f<span class="pl-k">!==void</span> <span class="pl-c1">0</span><span class="pl-k">?</span>b[g]<span class="pl-k">=</span>f<span class="pl-k">:delete</span> b[g]);<span class="pl-k">return</span> e.<span class="pl-s3">call</span>(a,d,b)}<span class="pl-s">var</span> d,a<span class="pl-k">=</span><span class="pl-s3">String</span>(a);q.<span class="pl-sc">lastIndex</span><span class="pl-k">=</span><span class="pl-c1">0</span>;q.<span class="pl-s3">test</span>(a)<span class="pl-k">&amp;&amp;</span>(a<span class="pl-k">=</span>a.<span class="pl-s3">replace</span>(q,<span class="pl-st">function</span>(<span class="pl-vpf">a</span>){<span class="pl-k">return</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span>u<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>0000<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a.<span class="pl-s3">charCodeAt</span>(<span class="pl-c1">0</span>).<span class="pl-s3">toString</span>(<span class="pl-c1">16</span>)).<span class="pl-s3">slice</span>(<span class="pl-k">-</span><span class="pl-c1">4</span>)}));<span class="pl-k">if</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-c1">[<span class="pl-cce">\]</span>,:{}<span class="pl-c1">\s</span>]</span><span class="pl-k">*</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>.<span class="pl-s3">test</span>(a.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\\</span>(?:<span class="pl-c1">[&quot;<span class="pl-cce">\\\/</span>bfnrt]</span><span class="pl-k">|</span>u<span class="pl-c1">[<span class="pl-c1">0-9a-fA-F</span>]</span><span class="pl-k">{4}</span>)<span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&quot;<span class="pl-c1">[<span class="pl-k">^</span>&quot;<span class="pl-cce">\\\n\r</span>]</span><span class="pl-k">*</span>&quot;<span class="pl-k">|</span>true<span class="pl-k">|</span>false<span class="pl-k">|</span>null<span class="pl-k">|</span>-<span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span>(?:<span class="pl-cce">\.</span><span class="pl-c1">\d</span><span class="pl-k">*</span>)<span class="pl-k">?</span>(?:<span class="pl-c1">[eE][+<span class="pl-cce">\-</span>]</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span>)<span class="pl-k">?</span><span class="pl-pds">/</span>g</span>,</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line"><span class="pl-s1"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-k">^</span><span class="pl-k">|</span>:<span class="pl-k">|</span>,)(?:<span class="pl-c1">\s</span><span class="pl-k">*</span><span class="pl-cce">\[</span>)<span class="pl-k">+</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)))<span class="pl-k">return</span> d<span class="pl-k">=</span><span class="pl-s3">eval</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>a<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>),<span class="pl-k">typeof</span> e<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span><span class="pl-k">?</span>c({<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>d},<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">:</span>d;<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">SyntaxError</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>JSON.parse<span class="pl-pds">&quot;</span></span>);}})();</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="pl-s">var</span> turk;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">turk <span class="pl-k">=</span> turk <span class="pl-k">||</span> {};</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-s3">Array</span>.<span class="pl-sc">prototype</span>.map) {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">    <span class="pl-s3">Array</span>.<span class="pl-sc">prototype</span>.<span class="pl-en">map</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">fun</span> /*, <span class="pl-vpf">thisp</span>*/) {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">      <span class="pl-s">var</span> len <span class="pl-k">=</span> <span class="pl-v">this</span>.<span class="pl-sc">length</span> <span class="pl-k">&gt;&gt;&gt;</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">typeof</span> fun <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) { <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">TypeError</span>(); }</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">      <span class="pl-s">var</span> res <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(len);</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">      <span class="pl-s">var</span> thisp <span class="pl-k">=</span> arguments[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">      <span class="pl-k">for</span> (<span class="pl-s">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">        <span class="pl-k">if</span> (i <span class="pl-k">in</span> <span class="pl-v">this</span>)</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">          res[i] <span class="pl-k">=</span> fun.<span class="pl-s3">call</span>(thisp, <span class="pl-v">this</span>[i], i, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">   		}</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">      <span class="pl-k">return</span> res;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">  <span class="pl-s">var</span> hopUndefined <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-s3">Object</span>.<span class="pl-sc">prototype</span>.hasOwnProperty,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">      showPreviewWarning <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">  <span class="pl-c">// We can disable the previewWarning by including this script with &quot;nowarn&quot; in the script url</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">  <span class="pl-c">// (i.e. mmturkey.js?nowarn). This doesn&#39;t work in FF 1.5, which doesn&#39;t define document.scripts</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">  <span class="pl-k">if</span> (<span class="pl-s3">document</span>.<span class="pl-sc">scripts</span>) {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">    <span class="pl-k">for</span>(<span class="pl-s">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, ii <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-sc">scripts</span>.<span class="pl-sc">length</span>; i <span class="pl-k">&lt;</span> ii; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">      <span class="pl-s">var</span> src <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-sc">scripts</span>[i].<span class="pl-sc">src</span>;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">      <span class="pl-k">if</span> (<span class="pl-sr"> <span class="pl-pds">/</span>mmturkey<span class="pl-pds">/</span></span>.<span class="pl-s3">test</span>(src) <span class="pl-k">&amp;&amp;</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\?</span>nowarn<span class="pl-pds">/</span></span>.<span class="pl-s3">test</span>(src) ) {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">        showPreviewWarning <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">  <span class="pl-s">var</span> <span class="pl-en">param</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">url</span>, <span class="pl-vpf">name</span> ) {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">    name <span class="pl-k">=</span> name.<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\[</span>]</span><span class="pl-pds">/</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\\[</span><span class="pl-pds">&quot;</span></span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\]</span>]</span><span class="pl-pds">/</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\\\]</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">    <span class="pl-s">var</span> regexS <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>[<span class="pl-cce">\\</span>?&amp;]<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>name<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>=([^&amp;#]*)<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">    <span class="pl-s">var</span> regex <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>( regexS );</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">    <span class="pl-s">var</span> results <span class="pl-k">=</span> regex.<span class="pl-s3">exec</span>( url );</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">    <span class="pl-k">return</span> ( results <span class="pl-k">==</span> <span class="pl-c1">null</span> ) <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> results[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">getKeys</span>(<span class="pl-vpf">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">    <span class="pl-s">var</span> a <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">    <span class="pl-k">for</span>(<span class="pl-s">var</span> key <span class="pl-k">in</span> obj) {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">      <span class="pl-k">if</span> ((hopUndefined <span class="pl-k">||</span> obj.hasOwnProperty(key)) <span class="pl-k">&amp;&amp;</span> (<span class="pl-k">typeof</span> obj[key] <span class="pl-k">!=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>) ) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">        a.<span class="pl-s3">push</span>(key);</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">    <span class="pl-k">return</span> a;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">  <span class="pl-c">// warning: Object.keys() is no good in older browsers</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">  <span class="pl-st">function</span> <span class="pl-en">isTable</span>(<span class="pl-vpf">array</span>,<span class="pl-vpf">equality</span>) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">  	<span class="pl-k">if</span> (<span class="pl-k">!</span>(array <span class="pl-k">instanceof</span> <span class="pl-s3">Array</span>)) {</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">  		<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">  	}</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">  	</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">  	<span class="pl-c">// if the array contains a non-Object, bail</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">  	<span class="pl-k">if</span> (array.reduce(<span class="pl-st">function</span>(<span class="pl-vpf">acc</span>,<span class="pl-vpf">x</span>) { <span class="pl-k">return</span> <span class="pl-k">!</span>(x <span class="pl-k">instanceof</span> <span class="pl-s3">Object</span>) <span class="pl-k">||</span> acc },<span class="pl-c1">false</span>)) {</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">  	  <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">  	}</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">  	<span class="pl-k">if</span> (equality <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>loose<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">  		<span class="pl-k">return</span> array.reduce(<span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">x</span>) {</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">  			<span class="pl-k">return</span> a <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> x <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">  		},<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">  	}</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">  	</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">    <span class="pl-s">var</span> <span class="pl-en">arraysEqual</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">b</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">    	<span class="pl-s">var</span> i <span class="pl-k">=</span> a.<span class="pl-sc">length</span>;</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">    	<span class="pl-k">if</span> (b.<span class="pl-sc">length</span> <span class="pl-k">!=</span> i) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">    		<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">    	}</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">    	<span class="pl-k">while</span>(i<span class="pl-k">--</span>) {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">    		<span class="pl-k">if</span> (a[i] <span class="pl-k">!=</span> b[i]) {</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">    			<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">    		}</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">    	}</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">    	<span class="pl-k">return</span> <span class="pl-c1">true</span>;	</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">    }    </td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">  	<span class="pl-s">var</span> keys <span class="pl-k">=</span> getKeys(array[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">  	<span class="pl-k">return</span> array.reduce(<span class="pl-st">function</span>(<span class="pl-vpf">a</span>,<span class="pl-vpf">x</span>) {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">  		<span class="pl-k">return</span> a <span class="pl-k">&amp;&amp;</span> arraysEqual(keys,getKeys(x));</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">  	},<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">  <span class="pl-s">var</span> <span class="pl-en">htmlifyTable</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">array</span>) {</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">    <span class="pl-s">var</span> <span class="pl-en">getRow</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">      <span class="pl-s">var</span> str <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">      str <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;tr&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">      str <span class="pl-k">+=</span> keys.map(<span class="pl-st">function</span>(<span class="pl-vpf">k</span>) { <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;td&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> obj[k] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/td&gt;<span class="pl-pds">&quot;</span></span> }).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">      str <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/tr&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">      <span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">    <span class="pl-s">var</span> keys <span class="pl-k">=</span> getKeys(array[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">    <span class="pl-s">var</span> str <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">    str <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;span title=&#39;tabular representation of array of objects with the same set of keys&#39;&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">    str <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;table border=&#39;1&#39; style=&#39;border-collapse: collapse&#39; cellpadding=&#39;3&#39;&gt;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">    str <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;tr&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">      str <span class="pl-k">+=</span> keys.map(<span class="pl-st">function</span>(<span class="pl-vpf">k</span>) { <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;th&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> k <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/th&gt;<span class="pl-pds">&quot;</span></span> }).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">    str <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/tr&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">    str <span class="pl-k">+=</span> array.map(getRow).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">    str <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/table&gt;&lt;/span&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">    <span class="pl-k">return</span> str;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">  <span class="pl-c">// Give an HTML representation of an object</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">  <span class="pl-s">var</span> <span class="pl-en">htmlify</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">    <span class="pl-c">// Disabled for now, as this doesn&#39;t work for tables embedded within tables</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">    <span class="pl-c">/*if (isTable(obj)) {</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line"><span class="pl-c">      return htmlifyTable(obj);</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line"><span class="pl-c">    } else */</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">    <span class="pl-k">if</span> (obj <span class="pl-k">instanceof</span> <span class="pl-s3">Array</span>) {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> obj.map(<span class="pl-st">function</span>(<span class="pl-vpf">o</span>) { <span class="pl-k">return</span> htmlify(o) } ).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>]<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> obj <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">      <span class="pl-s">var</span> strs <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">      <span class="pl-k">for</span>(<span class="pl-s">var</span> key <span class="pl-k">in</span> obj) {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">        <span class="pl-k">if</span> (obj.hasOwnProperty(key)) {</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">          <span class="pl-s">var</span> str <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;li&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> htmlify(key) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> htmlify(obj[key]) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/li&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">          strs.<span class="pl-s3">push</span>(str);</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>{&lt;ul&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> strs.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/ul&gt;}<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> obj <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>)  {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> obj <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> obj <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>[undefined]<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">      <span class="pl-k">return</span> obj.<span class="pl-s3">toString</span>();</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">  <span class="pl-s">var</span> <span class="pl-en">addFormData</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">form</span>,<span class="pl-vpf">key</span>,<span class="pl-vpf">value</span>) {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">    <span class="pl-s">var</span> input <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">    input.<span class="pl-sc">type</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>hidden<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">    input.<span class="pl-sc">name</span> <span class="pl-k">=</span> key;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">    input.<span class="pl-sc">value</span> <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">    form.<span class="pl-s3">appendChild</span>(input);</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">  <span class="pl-s">var</span> url <span class="pl-k">=</span> <span class="pl-s3">window</span>.<span class="pl-sc">location</span>.<span class="pl-sc">href</span>,</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">      src <span class="pl-k">=</span> param(url, <span class="pl-s1"><span class="pl-pds">&quot;</span>assignmentId<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> url <span class="pl-k">:</span> <span class="pl-s3">document</span>.<span class="pl-sc">referrer</span>,</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">      keys <span class="pl-k">=</span> [<span class="pl-s1"><span class="pl-pds">&quot;</span>assignmentId<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>hitId<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>workerId<span class="pl-pds">&quot;</span></span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>turkSubmitTo<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">  keys.map(<span class="pl-st">function</span>(<span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">    turk[key] <span class="pl-k">=</span> <span class="pl-s3">unescape</span>(param(src, key));</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">  turk.previewMode <span class="pl-k">=</span> (turk.assignmentId <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>ASSIGNMENT_ID_NOT_AVAILABLE<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">  <span class="pl-c">// Submit a POST request to Turk</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">  <span class="pl-s3">turk</span>.<span class="pl-en">submit</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">object</span>, <span class="pl-vpf">unwrap</span>) {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">    <span class="pl-s">var</span> keys <span class="pl-k">=</span> getKeys(object);</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> object <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> keys.<span class="pl-sc">length</span> <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">      <span class="pl-s3">alert</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>mmturkey: you need to pass an object (i.e., actual data) to turk.submit() <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">    unwrap <span class="pl-k">=</span> <span class="pl-k">!!</span>unwrap;</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">    <span class="pl-s">var</span> assignmentId <span class="pl-k">=</span> turk.assignmentId,</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">        turkSubmitTo <span class="pl-k">=</span> turk.turkSubmitTo,</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">        rawData <span class="pl-k">=</span> {},</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">        form <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>form<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">   </td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">    <span class="pl-s3">document</span>.<span class="pl-sc">body</span>.<span class="pl-s3">appendChild</span>(form);</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">    <span class="pl-k">if</span> (assignmentId) {</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">      rawData.assignmentId <span class="pl-k">=</span> assignmentId;</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">      addFormData(form,<span class="pl-s1"><span class="pl-pds">&quot;</span>assignmentId<span class="pl-pds">&quot;</span></span>,assignmentId);</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">    </td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">    <span class="pl-k">if</span> (unwrap) {</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">      <span class="pl-c">// Filter out non-own properties and things that are functions</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">      keys.map(<span class="pl-st">function</span>(<span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">        rawData[key] <span class="pl-k">=</span> object[key];</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">        addFormData(form, key, JSON.stringify(object[key]));</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">      </td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">      rawData[<span class="pl-s1"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> object;</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">      addFormData(form, <span class="pl-s1"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span>, JSON.stringify(object));</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">    <span class="pl-c">// If there&#39;s no turk info</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>assignmentId <span class="pl-k">||</span> <span class="pl-k">!</span>turkSubmitTo) {</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">      <span class="pl-c">// Emit the debug output and stop</span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">      <span class="pl-s">var</span> div <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">          style <span class="pl-k">=</span> div.<span class="pl-sc">style</span>;</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">      style.<span class="pl-sc">fontFamily</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>&quot;HelveticaNeue-Light&quot;, &quot;Helvetica Neue Light&quot;, &quot;Helvetica Neue&quot;, sans-serif<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">      style.<span class="pl-sc">fontSize</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>14px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">      style.cssFloat <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>right<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">      style.padding <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>1em<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">      style.<span class="pl-sc">backgroundColor</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>#dfdfdf<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">      div.innerHTML <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;p&gt;&lt;b&gt;Debug mode&lt;/b&gt;&lt;/p&gt;Here is the data that would have been submitted to Turk: &lt;ul&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> htmlify(rawData) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&lt;/ul&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">      div.<span class="pl-sc">className</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>mmturkey-debug<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">      <span class="pl-s3">document</span>.<span class="pl-sc">body</span>.<span class="pl-s3">appendChild</span>(div);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">    <span class="pl-c">// Otherwise, submit the form</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">    form.<span class="pl-sc">action</span> <span class="pl-k">=</span> turk.turkSubmitTo <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>/mturk/externalSubmit<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">    form.<span class="pl-sc">method</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>POST<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">    form.<span class="pl-s3">submit</span>();</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">  <span class="pl-c">// simulate $(document).ready() to show the preview warning</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">  <span class="pl-k">if</span> (showPreviewWarning <span class="pl-k">&amp;&amp;</span> turk.previewMode) {</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">    <span class="pl-s">var</span> intervalHandle <span class="pl-k">=</span> <span class="pl-s3">setInterval</span>(<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">      <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">        <span class="pl-s">var</span> div <span class="pl-k">=</span> <span class="pl-s3">document</span>.<span class="pl-s3">createElement</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>),</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">            style <span class="pl-k">=</span> div.<span class="pl-sc">style</span>;</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">        style.<span class="pl-sc">backgroundColor</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>gray<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">        style.<span class="pl-sc">color</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>white<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">        </td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">        style.position <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>absolute<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">        style.margin <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">        style.padding <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">        style.<span class="pl-sc">paddingTop</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>15px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">        style.<span class="pl-sc">paddingBottom</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>15px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">        style.<span class="pl-sc">top</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>0<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">        style.<span class="pl-sc">width</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>98%<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">        style.<span class="pl-sc">textAlign</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>center<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">        style.<span class="pl-sc">fontFamily</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>arial<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">        style.<span class="pl-sc">fontSize</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>24px<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">        style.<span class="pl-sc">fontWeight</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>bold<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">        </td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">        style.opacity <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>0.5<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">        style.filter <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>alpha(opacity = 50)<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">        </td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">        div.innerHTML <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>PREVIEW MODE: CLICK <span class="pl-cce">\&quot;</span>ACCEPT<span class="pl-cce">\&quot;</span> ABOVE TO START THIS HIT<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">        </td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">        <span class="pl-s3">document</span>.<span class="pl-sc">body</span>.<span class="pl-s3">appendChild</span>(div);</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">        <span class="pl-s3">clearInterval</span>(intervalHandle);</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">      } <span class="pl-k">catch</span>(e) {</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">        </td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">    },<span class="pl-c1">20</span>);</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">  </td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">})();</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="http://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="http://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.15294s from github-fe126-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
    </ul>
  </div>
</div>


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-9643b0378c6bcb216adcdaaaa703eed77aa239aaf1c2ae44cadb2fb5099ec172.js"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-9dec5965f0440c271e53f19297ddcf6a6e892652dcbd89ff67742db9834aeeb6.js"></script>
      
      

  </body>
</html>

