/**
  * Gtk.IMContextSimple is a simple input method context supporting table-based
input methods. It has a built-in table of compose sequences that is derived
from the X11 Compose files. 
  */
export declare class IMContextSimple extends import('../Gtk').IMContext{
/**
  * Creates a new Gtk.IMContextSimple.
  * @returns a new Gtk.IMContextSimple. 
  */
static new(): import('../Gtk').IMContext;
addComposeFile(composeFile: string): void;
;
/**
  *   
  */
object: import('../Gtk').IMContext;
}

