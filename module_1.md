
# Odoo 12.0 - Technical Training - Module 1

Widgets: the UI building blocks

## Requirements

* Moderate knowledge of Odoo
* Moderate knowledge of Javascript


## Scenario

We are the IT staff for the Awesome T-Shirt company, which is in the business of
printing customised tshirts for online customers.

The usual process is the following: a customer looking for a nice t-shirt can
simply order it on the Awesome T-Shirt website, and give the url for any
image that he wants.  He also has to fill some basic informations, such as the
desired size, and amount of t-shirts.  Once he confirms his order, and once the
payment is validated, the system will create a task in our project application.

The project is a simple kanban view, with a few columns.

The Awesome T-shirt big boss, Bafien Ckinpaers, is not happy with our
implementation. He believe that by micromanaging more, he will be able to
extract more revenue from his employees.

As the IT staff for Awesome T-shirt, we are tasked with improving the system.
Various independant tasks need to be done. Bosses like dashboards. Here is what
we would like to do:


## Task 1: create empty dashboard

Goals:
------
- work with the odoo JS modules
- add a file to the assets
- create and understand client actions

Description:
------------
- create a new file awesome_dashboard.js in static/src/js with a simple
  console.log('hello world')
- add it to the assets_backend bundle
- make sure it is loaded (and you can see the message in the console)
- replace the content of the file with an odoo module (awesome_tshirt.dashboard)
- create a new client action and register it
- add a new menu item T-Shirt Dashboard, which opens this client action

This client action is a widget, which we will use to display our custom
dashboard. This dashboard should have 3 parts, which are independant tasks.

Resources:
----------
* [Assets management](https://www.odoo.com/documentation/12.0/reference/javascript_reference.html#assets-management)
* [Odoo Module System](https://www.odoo.com/documentation/12.0/reference/javascript_reference.html#javascript-module-system)
* [Adding a client action](https://www.odoo.com/documentation/12.0/reference/javascript_cheatsheet.html#adding-a-client-action)
* [Client Actions](https://www.odoo.com/documentation/12.0/reference/javascript_reference.html#client-action)


## Task 2: add a simple widget

Goals:
------
- create a widget from scratch
- import your code in another file
- understand how to instantiate a widget and append it to the dom
- understand how to add behaviour (with events/handlers) to a widget

Description:
------------
This is not really in the scenario, but it is useful to see a simple example of
a widget.  For this exercise, we will create a counter widget.

- create a MyCounter widget, in its own file, and add it to the dashboard
- this widget should simply render a template with 2 buttons (+ and -) and a
  span which display a counter, initially set to 0
- clicking on these buttons should increment/decrement the value

Resources:
----------
* [Widget API](https://www.odoo.com/documentation/12.0/reference/javascript_reference.html#widgets)
* [QWeb Template engine](https://www.odoo.com/documentation/12.0/reference/qweb.html)

## Task 3A: add quick navigation

Goals:
------
- use qweb templates
- add behaviour to a widget
- execute actions from JS
- understand how to create 'dynamic' action (purely in JS)

Description:
------------
This should be a simple div with various buttons:
- a button 'Customers', which opens a kanban view with all customers (this
    action already exists in xml)
- a button 'New Orders', which opens a list view with all orders created in
    the last 7 days
- a button 'Cancelled Order', which opens a list of all orders cancelled in
    the last 7 days

Resources:
----------
* [do_action method](https://github.com/odoo/odoo/blob/9393a0eba88cad6184b5255a11f6a5a2996528cc/addons/web/static/src/js/core/service_mixins.js#L187)
* [example of do_action use](https://github.com/odoo/odoo/blob/9393a0eba88cad6184b5255a11f6a5a2996528cc/addons/web/static/src/js/tools/debug_manager.js#L285)
* [res_partner action](https://github.com/odoo/odoo/blob/a0ff2966b6db4e652fdc19a2f792af8cf3e5ce69/odoo/addons/base/views/res_partner_views.xml#L585)

## Task 3B: add various statistics

Goals:
------
- load data from the server
- use the proper hooks in a widget

Description:
------------
another div, with various statistics:
- number of new orders this month
- total amount of new orders this month
- average amount of t-shirt by order this month
- number of cancelled orders this month
- average time for an order to go from 'new' to 'sent' or 'cancelled'

Make sure the widget is only displayed when the data is ready.

Note: the module comes with a controller which returns those statistics. It is
located in the file *main.py*, and will answer to the url
*/awesome_tshirt/statistics*.


Resources:
----------
* [rpc documentation](https://www.odoo.com/documentation/12.0/reference/javascript_reference.html#rpcs)
* [widget lifecycle](https://www.odoo.com/documentation/12.0/reference/javascript_reference.html#widget-lifecycle)

## Task 3C: pie chart

Goals:
------
- load assets from the server
- integrate an external library
- use and manipulate a widget

Description:
------------
Finally, everyone likes charts, so let us add a pie chart in a last section,
which displays the proportions of t-shirts sold for each size: S/M/L/XL/XXL

For this exercise, we want to use Chart.js, add it to the assets (or not?),
create a widget (it is strictly not necessary, but this is an exercise!), and
display the required information


Resources:
----------
* [ChartJS](http://www.chartjs.org/)
* [ChartJS Pie example](http://www.chartjs.org/samples/latest/charts/pie.html)
* [Adding file to a bundle](https://www.odoo.com/documentation/12.0/reference/javascript_reference.html#adding-files-in-an-asset-bundle)
* [Lazy load assets example](https://github.com/odoo/odoo/blob/57decbbed6d3d8899b09a58361ae9b30d39a9c03/addons/web_editor/static/src/js/widgets/widgets.js#L1597)

## Extra tasks:

Goals:
------
- think about the tradeoffs between various way to use/load assets
- add behaviour to external library code
- use the ControlPanelMixin
- understand how odoo JS translation system should be used
- make the dashboard reload itself automatically every 30 seconds

Description:
------------
- For maximal efficiency, the fancy pie chart JS library should be lazy loaded
- clicking on a section of the pie chart should open a list view of all orders
  which have the corresponding size,
- add a control panel to your dashboard, and put the various buttons from the
  dashboard in the control panel
- make sure your application can be translated...

Resources:
----------
- [Control panel mixin doc](https://www.odoo.com/documentation/12.0/reference/javascript_reference.html#using-the-control-panel-mixin)
- [Translation doc](https://www.odoo.com/documentation/12.0/reference/javascript_reference.html#translation-management)

