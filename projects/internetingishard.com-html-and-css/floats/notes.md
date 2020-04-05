https://www.internetingishard.com/html-and-css/floats/

box model: content, padding, border, margin

minimal CSS reset:

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }


width includes border, not just content

    box-sizing: border-box;


center a float (must set width)

    margin: 0 auto;


clearing a float: go after floated items

    clear: both;


recognise the height of child elements

    overflow: hidden;
