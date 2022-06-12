<img src="mockup.jpg">

# da-share
jQuery plugin for share buttons

<br><br>

## HOW TO:

### Easy Mode

#### Requirements:
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome)
* [Bootstrap 4](https://github.com/twbs/bootstrap)
* [jQuery](https://github.com/jquery/jquery)
<br><br>

#### Installation:
~~Paste<br><br>
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">`<br>
`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">`<br>
<br>
after<br>
`<head>`<br>
tag in your html page~~
<br>
<br>
Paste <br><br>
~~`<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>`<br>~~
**`<script type="text/javascript" src="https://danielkon.github.io/da-share/jquery.da-share.js"></script>`**<br>
<br>
before<br>
`</body>`<br>
tag in your html page
<br><br>

#### Using:
Paste<br>
<br>
**`<div class="da-share-html da-fb da-vk da-tw da-ok da-gp"></div>`**<br>
<br>
as many copies of this code as you need on the html page.
<br><br>

##### Available social networks:
* Facebook — `da-fb`
* VK (ВКонтакте) — `da-vk`
* Twitter — `da-tw`
* OK (Одноклассники) — `da-ok`
* Pinterest — `da-pi`
* Google Plus — `da-gp`

<br><br>

### Hard Mode

#### Advantages
You can **customize** the visual style of the **buttons** yourself
<br><br>

#### Requirements:
* [jQuery](https://github.com/jquery/jquery)
<br><br>

#### Installation:
Paste<br>
<br>
**`<script src="https://danielkon.github.io/da-share/jquery.da-share.js"></script>`**<br>
<br>
after <br>
`jquery.min.js`
<br><br>

#### Using:
Add a call to the `da_share` function on the `onclick` event, for example: <br>
<br>
**`<a href="#" onclick="da_share.fb();">Share</a>`<br>
`<a href="#" onclick="da_share.tw();">Tweat</a>`<br>**
<br>

##### Available social networks:
<table>
  <tr>
    <th>Social:</th><th>Call:</th><th>Optional parameters:</th>
  </tr>
  <tr>
    <td>Facebook</td><td>`onclick="da_share.fb();"`</td><td>url</td>
  </tr>
  <tr>
    <td>VK (ВКонтакте)</td><td>`onclick="da_share.vk();"`</td><td>url, title, description, image</td>
  </tr>
  <tr>
    <td>Twitter</td><td>`onclick="da_share.tw();"`</td><td>url, text, hashtags, via</td>
  </tr>
  <tr>
    <td>OK (Одноклассники)</td><td>`onclick="da_share.ok();"`</td><td>url, title, image</td>
  </tr>
  <tr>
    <td>Pinterest</td><td>`onclick="da_share.pi();"`</td><td>url, description, image</td>
  </tr>
  <tr>
    <td>Google Plus</td><td>`onclick="da_share.gp();"`</td><td>url</td>
  </tr>
</table>
<br><br>

## DEMO:
<a href="https://danielkon.github.io/da-share/demo.html" target="_blank">https://danielkon.github.io/da-share/demo.html</a><a href="https://danielkon.github.io/da-share/native.html">.</a>
<br>
