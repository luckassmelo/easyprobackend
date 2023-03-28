import {ZebraType} from '../types/zebra-printing.type'
export function zplFormatHelper(fields: ZebraType, index:number): string{    
    const zpl = `^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR2,2~SD20^JUS^LRN^CI0^XZ^XA^MMT^PW1119^LL0224^LS0^FT9,247^BQN,2,10^FH\^FDLA,${fields.batchSchott}-${index}^FS^FT234,93^A0N,56,55^FH\^FDCOD TINTA: ${fields.inkCode}^FS^FT234,177^A0N,56,55^FH\^FDLOTE: ${fields.batchSchott}^FS^FT804,93^A0N,56,55^FH\^FDNUM: ${index}^FS^FT653,177^A0N,56,55^FH\^FDCOR: ${fields.colorInk}^FS^PQ1,0,1,Y^XZ`
    return zpl;
}