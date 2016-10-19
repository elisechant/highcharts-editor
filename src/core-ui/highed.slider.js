/******************************************************************************

Copyright (c) 2016, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

/** Slider widget
 *  @constructor
 *
 *  @emits Change - when the value changes
 *
 *  @param parent {domnode} - the parent of the slider
 *  @param attributes {object} - the slider properties
 *    > max {number} - the max value
 *    > min {number} - the min value
 *    > step {number} - the step size
 *    > resetTo {anything} - value to reset to
 */
highed.Slider = function (parent, attributes) {
    var properties = highed.merge({
            max: 100,
            min: 1,
            step: 1,
            resetTo: 0
        }, attributes),
        events = highed.events(),
        value = properties.resetTo,
        container = highed.dom.cr('div', 'highed-slider'),
        indicator = highed.dom.cr('div', 'highed-slider-indicator'),
        mover = highed.Movable(indicator)
    ;

    ////////////////////////////////////////////////////////////////////////////

    // Calculate the indicator X
    function calcIndicator() {

    }

    /** Set the value
     *  @memberof highed.Slider
     *  @param newValue {number} - the new value
     */
    function set(newValue) {
        value = highed.clamp(properties.min, properties.max, newValue);
        calcIndicator();
    }

    mover.on('Moving', function (x, y) {
        //Set the value based on the new X
    });

    ////////////////////////////////////////////////////////////////////////////
    
    if (parent) {
        parent = highed.dom.get(parent);
        highed.dom.ap(parent, container);
    }

    highed.dom.ap(container,
        indicator
    );

    // Public interface
    return {
        on: events.on,
        set: set,
        container: container
    };
};