# purpose of this repo

- I am currently learning how to setup and use CSS modules to locally scope CSS files to their respective components.

- This is part of the react course in the odin project to read CSS module documentation and learn how to utilize it. 
Part of the "Styling React Applications" lesson.

# how to use CSS modules

- to create a CSS module, it can be defined in this format:

filename.module.css

this now scopes the CSS file locally to whereever you import it.

- To utilize the CSS module, you import it into the react component, then calling the class you want to apply to the react component in the className property.

ex: 

import styles from "./Button.module.css";

<button className={styles.btn}> submit </button>

- If I want to re-use CSS styling from another class, and then build off of it, then I would use the Composes attribute: 

.btn {
    width: 90px;
    height: 30px;
}

.submitBtn {
    composes: btn;
    color: green;
}

note: in the submitBtn class, composes imports the styles from the .btn class, then builds off of it with the font color.

note: you CAN override the attributes in the new class. If .btn had a color attribute of blue, and .submitBtn had the color attribute as green, 
the .submitBtn overrides the color since its building off of .btn.

- The syntax for Composes for CSS styling reuse is. Composes attribute needs to be DEFINED FIRST BEFORE ANY OTHER RULE IN ORDER TO WORK:

composes: classname

- Composes allows multiple classes to build off of, but will require separate composes if the class is from a separate CSS module.

ex: multiple composes in the SAME CSS module.

.btnGreen {
    color: green;
}

.btnYellow {
    color: yellow;
}

.btnRed {
    color: red;
}

.btn {
    composes: btnGreen btnYellow btnRed;
    width: 90px;
    height: 90px;
}

ex: multiple composes but from different CSS modules.

.btnGreen {
    color: green;
}

.btn {
    composes: green;
    composes: btnRed from "./filepathToCSSModule";
    composes: classnamegoeshere from "./filepathToCSSModule";
}

# some quirks I learned from using CSS modules: 

- you ARE allowed to import multiple different CSS modules into the same component. 

ex: 
import styles from "./styles.module.css"
import utilityStyles from "./utilities.module.css"

<div className={`${styles.description} ${utilityStyles.colorGreen}`} > this text is green </div>

note: this makes the div above have a className of description, and colorGreen due to the string template literal, so both styles are applied to 
the div.


- Remember that you can use/compose different classes from separate CSS modules, but each class from an external module requires it's own 
"composes" attribute at the beginning.