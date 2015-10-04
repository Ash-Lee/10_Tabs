// 10_Tabs
// JavaScript + jQuery


var menuOpen = false,
    screenWidth = null;
    loop = null,
    content = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper, nisi non vulputate aliquet, quam arcu lobortis ligula, sagittis ornare tellus ante a felis. In erat libero, iaculis in nisi nec, pellentesque auctor enim. Proin maximus sit amet neque ac faucibus. Aliquam vel libero eget odio posuere malesuada eu non dui. Suspendisse nibh ante, luctus pharetra libero vel, viverra feugiat neque. Nunc convallis, mi quis ultricies hendrerit, ex ligula elementum est, sit amet blandit neque mauris non arcu. Ut sit amet risus eu odio venenatis porttitor. Morbi ornare tristique purus, eget semper sapien. Nunc a lorem ac nisl pellentesque dignissim. Curabitur cursus auctor est varius facilisis. Sed ultricies quam at nibh posuere tincidunt. Quisque blandit mi eget vulputate egestas. Praesent eget orci in velit eleifend ornare.</p><p>Suspendisse dolor leo, sollicitudin quis neque quis, rhoncus consequat metus. Vivamus consequat metus sed rhoncus vestibulum. Quisque pulvinar euismod cursus. Pellentesque nec libero augue. Nullam volutpat sit amet erat et lacinia. Donec sollicitudin ullamcorper luctus. Integer eget odio in ipsum fermentum egestas eu varius leo. Nam mattis vestibulum viverra.</p><p>Duis in fringilla quam. Sed aliquam ultrices libero non sollicitudin. Sed sed erat ultrices, sollicitudin nisi ac, tincidunt quam. Phasellus maximus ligula ut diam sagittis ullamcorper. Phasellus scelerisque risus et feugiat elementum. Mauris bibendum quam eget est vulputate lacinia. Nullam mattis rhoncus nisi, eget lacinia magna interdum et. Phasellus interdum ac arcu sit amet tincidunt. Vestibulum justo arcu, blandit at risus posuere, lacinia tempor turpis.</p>",
    tabContent = {
    tab1: "<div class=\'tab-window-content content1\'><h1>Tab 1</h1>" + content + "</div>",
    tab2: "<div class=\'tab-window-content\'><h1>Tab 2</h1>" + content + "</div>",
    tab3: "<div class=\'tab-window-content\'><h1>Tab 3</h1>" + content + "</div>",
    tab4: "<div class=\'tab-window-content\'><h1>Tab 4</h1>" + content + "</div>"
    };


$(function() {
    // Tabs Code
    // Set initial tab content
    loadContent('.tab1', 'active1', tabContent.tab1, '#9EBD9E');
    updateTabM('.tabM', 'active1', 'Tab 1');

    // Activate tab1
    $('.tab1').on('click', function() {
        deactivateTab();
        loadContent('.tab1', 'active1', tabContent.tab1, '#9EBD9E');
        updateTabM('.tabM', 'active1', 'Tab 1');
    });

    // Activate tab2
    $('.tab2').on('click', function() {
        deactivateTab();
        loadContent('.tab2', 'active2', tabContent.tab2, '#EEC584');
        updateTabM('.tabM', 'active2', 'Tab 2');
    });

    // Activate tab3
    $('.tab3').on('click', function() {
        deactivateTab();
        loadContent('.tab3', 'active3', tabContent.tab3, '#DD855C');
        updateTabM('.tabM', 'active3', 'Tab 3');
    });

    // Activate tab4
    $('.tab4').on('click', function() {
        deactivateTab();
        loadContent('.tab4', 'active4', tabContent.tab4, '#769EA3');
        updateTabM('.tabM', 'active4', 'Tab 4');
    });

    // Menu Code
    // Open and close menu
    $('.title').on('click', function() {
        toggleMenu();
    });

    // Activate menu1
    $('.menu1').on('click', function() {
        loadContent('.tabM', 'active1', tabContent.tab1, '#9EBD9E');
        updateTabMText('Tab 1');
        updateTab('.tab1', 'active1');
        toggleMenu();
    });

    // Activate menu2
    $('.menu2').on('click', function() {
        loadContent('.tabM', 'active2', tabContent.tab2, '#EEC584');
        updateTabMText('Tab 2');
        updateTab('.tab2', 'active2');
        toggleMenu();
    });

    // Activate menu3
    $('.menu3').on('click', function() {
        loadContent('.tabM', 'active3', tabContent.tab3, '#DD855C');
        updateTabMText('Tab 3');
        updateTab('.tab3', 'active3');
        toggleMenu();
    });

    // Activate menu4
    $('.menu4').on('click', function() {
        loadContent('.tabM', 'active4', tabContent.tab4, '#769EA3');
        updateTabMText('Tab 4');
        updateTab('.tab4', 'active4');
        toggleMenu();
    });

    loop = setInterval( function() {
        if ($(window).width() > 583) {
            $('.menu').css('display', 'none');
            $('.tab-header').css('height', '120px');
            $('.title').css('border-radius', '5px');
            menuOpen = false;
        }           
    }, 1);
});


function loadContent(tab, active, content, col) {
    $(tab).attr('id', active);
    $('.tab-window').css('background-color', col);
    $('.tab-window').empty();
    $('.tab-window').append(content);
};


function updateTabM(tab, active, name) {
    $(tab).attr('id', active);
    $('.tabM').empty().text(name);
};


function updateTabMText(name) {
    $('.tabM').empty().text(name);
};


function updateTab(tab, active) {
    deactivateTab();
    $(tab).attr('id', active);
};


function deactivateTab() {
    for (var i = 1; i < 5; i++) {
        $('.tab1, .tab2, .tab3, .tab4').removeAttr('id', 'active' + i);
    }
};


function toggleMenu() {
    if ($(window).width() < 600) {
        if (menuOpen === true) {
            $('.menu').css('display', 'none');
            $('.tab-header').css('height', '120px');
            $('.title').css('border-radius', '5px');
            menuOpen = false;
        } else {
            $('.menu').css('display', 'block');
            $('.tab-header').css('height', '300px');
            $('.title').css('border-radius', '5px 5px 0px 0px');
            menuOpen = true;
        }
    }
};