/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

// Material Design Icons v7.2.96
var mdiChartBoxOutline = "M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17M19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z";
var mdiDeleteOutline = "M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z";
var mdiDownloadOutline = "M13,5V11H14.17L12,13.17L9.83,11H11V5H13M15,3H9V9H5L12,16L19,9H15V3M19,18H5V20H19V18Z";
var mdiFileUploadOutline = "M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z";
var mdiRocketLaunchOutline = "M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M19.22 4C19.5 4 19.75 4 19.96 4.05C20.13 5.44 19.94 8.3 16.66 11.58C14.96 13.29 12.93 14.6 10.65 15.47L8.5 13.37C9.42 11.06 10.73 9.03 12.42 7.34C15.18 4.58 17.64 4 19.22 4M19.22 2C17.24 2 14.24 2.69 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.62 17.27 10.13 17.5 10.66 17.5C10.89 17.5 11.13 17.44 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39S20.7 2 19.22 2M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z";

/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


var isNothing_1      = isNothing;
var isObject_1       = isObject;
var toArray_1        = toArray;
var repeat_1         = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1         = extend;

var common = {
	isNothing: isNothing_1,
	isObject: isObject_1,
	toArray: toArray_1,
	repeat: repeat_1,
	isNegativeZero: isNegativeZero_1,
	extend: extend_1
};

// YAML error class. http://stackoverflow.com/questions/8458984


function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException$1(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;


YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


var exception = YAMLException$1;

// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


var snippet = makeSnippet;

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type$1(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

var type = Type$1;

/*eslint-disable max-len*/





function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema$1(definition) {
  return this.extend(definition);
}


Schema$1.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new exception('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type$1.loadKind && type$1.loadKind !== 'scalar') {
      throw new exception('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type$1.multi) {
      throw new exception('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema$1.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


var schema = Schema$1;

var str = new type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

var seq = new type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

var map = new type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

var _null = new type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

var bool = new type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

var int = new type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

var float = new type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});

var core = json;

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

var timestamp = new type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

var merge = new type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/*eslint-disable no-bitwise*/





// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

var binary = new type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString$2.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

var omap = new type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

var _toString$1 = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString$1.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

var pairs = new type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

var set = new type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

/*eslint-disable max-len,no-use-before-define*/







var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i$3 = 0; i$3 < 256; i$3++) {
  simpleEscapeCheck[i$3] = simpleEscapeSequence(i$3) ? 1 : 0;
  simpleEscapeMap[i$3] = simpleEscapeSequence(i$3);
}


function State$1(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || _default;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = snippet(mark);

  return new exception(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty$1.call(overridableKeys, keyNode) &&
        _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State$1(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load$1(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception('expected a single document in the stream, but found more');
}


var loadAll_1 = loadAll$1;
var load_1    = load$1;

var loader = {
	loadAll: loadAll_1,
	load: load_1
};

/*eslint-disable no-use-before-define*/





var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new exception('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || _default;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new exception('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new exception('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump$1(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

var dump_1 = dump$1;

var dumper = {
	dump: dump_1
};

function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


var Type                = type;
var Schema              = schema;
var FAILSAFE_SCHEMA     = failsafe;
var JSON_SCHEMA         = json;
var CORE_SCHEMA         = core;
var DEFAULT_SCHEMA      = _default;
var load                = loader.load;
var loadAll             = loader.loadAll;
var dump                = dumper.dump;
var YAMLException       = exception;

// Re-export all types in case user wants to create custom schema
var types = {
  binary:    binary,
  float:     float,
  map:       map,
  null:      _null,
  pairs:     pairs,
  set:       set,
  timestamp: timestamp,
  bool:      bool,
  int:       int,
  merge:     merge,
  omap:      omap,
  seq:       seq,
  str:       str
};

// Removed functions from JS-YAML 3.0.x
var safeLoad            = renamed('safeLoad', 'load');
var safeLoadAll         = renamed('safeLoadAll', 'loadAll');
var safeDump            = renamed('safeDump', 'dump');

var jsYaml = {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,
	load: load,
	loadAll: loadAll,
	dump: dump,
	YAMLException: YAMLException,
	types: types,
	safeLoad: safeLoad,
	safeLoadAll: safeLoadAll,
	safeDump: safeDump
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window,e$4=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$4?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$3=window,r$1=e$3.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$3.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$3.reactiveElementVersions)&&void 0!==s$2?s$2:e$3.reactiveElementVersions=[]).push("1.6.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$1=window,s$1=i$1.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,d=()=>r.createComment(""),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1),P=(t,i)=>{const s=t.length-1,l=[];let r,d=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let e,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=r?r:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,e=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,r=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";d+=u===f?s+h:v>=0?(l.push(e),s.slice(0,v)+o$1+s.slice(v)+n$3+w):s+n$3+(-2===v?(l.push(void 0),i):w);}const c=d+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$2?e$2.createHTML(c):c,l]};class V{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,u=0;const c=t.length-1,v=this.parts,[a,f]=P(t,i);if(this.el=V.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$3)){const s=f[u++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?I:"@"===i[1]?L:R});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],d()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],d());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const d=u(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==d&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===d?r=void 0:(r=new d(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=N(t,r._$AS(t,i.values),r,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new M(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new z(n,this,t)),this._$AV.push(i),d=e[++h];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),u(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&u(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new S(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new V(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new M(this.k(d()),this.k(d()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class R{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=N(this,t,i,0),n=!u(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=N(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!u(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends R{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const H=s$1?s$1.emptyScript:"";class I extends R{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name);}}class L extends R{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const j=i$1.litHtmlPolyfillSupport;null==j||j(V,M),(null!==(t$1=i$1.litHtmlVersions)&&void 0!==t$1?t$1:i$1.litHtmlVersions=[]).push("2.7.4");const B=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new M(i.insertBefore(d(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function t(t){return n$1({...t,state:!0})}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/*! bulma.io v0.9.4 | MIT License | github.com/jgthms/bulma */
// escape backslash in bulma.css, ref: https://github.com/lit/lit-element/issues/637
const bulmaStyles = i$2 `
  /* Bulma Utilities */
  .button,
  .input,
  .textarea,
  .select select,
  .file-cta,
  .file-name,
  .pagination-previous,
  .pagination-next,
  .pagination-link,
  .pagination-ellipsis {
    -moz-appearance: none;
    -webkit-appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.5em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: calc(0.5em - 1px);
    padding-left: calc(0.75em - 1px);
    padding-right: calc(0.75em - 1px);
    padding-top: calc(0.5em - 1px);
    position: relative;
    vertical-align: top;
  }

  .button:focus,
  .input:focus,
  .textarea:focus,
  .select select:focus,
  .file-cta:focus,
  .file-name:focus,
  .pagination-previous:focus,
  .pagination-next:focus,
  .pagination-link:focus,
  .pagination-ellipsis:focus,
  .is-focused.button,
  .is-focused.input,
  .is-focused.textarea,
  .select select.is-focused,
  .is-focused.file-cta,
  .is-focused.file-name,
  .is-focused.pagination-previous,
  .is-focused.pagination-next,
  .is-focused.pagination-link,
  .is-focused.pagination-ellipsis,
  .button:active,
  .input:active,
  .textarea:active,
  .select select:active,
  .file-cta:active,
  .file-name:active,
  .pagination-previous:active,
  .pagination-next:active,
  .pagination-link:active,
  .pagination-ellipsis:active,
  .is-active.button,
  .is-active.input,
  .is-active.textarea,
  .select select.is-active,
  .is-active.file-cta,
  .is-active.file-name,
  .is-active.pagination-previous,
  .is-active.pagination-next,
  .is-active.pagination-link,
  .is-active.pagination-ellipsis {
    outline: none;
  }

  .button[disabled],
  .input[disabled],
  .textarea[disabled],
  .select select[disabled],
  .file-cta[disabled],
  .file-name[disabled],
  .pagination-previous[disabled],
  .pagination-next[disabled],
  .pagination-link[disabled],
  .pagination-ellipsis[disabled],
  fieldset[disabled] .button,
  fieldset[disabled] .input,
  fieldset[disabled] .textarea,
  fieldset[disabled] .select select,
  .select fieldset[disabled] select,
  fieldset[disabled] .file-cta,
  fieldset[disabled] .file-name,
  fieldset[disabled] .pagination-previous,
  fieldset[disabled] .pagination-next,
  fieldset[disabled] .pagination-link,
  fieldset[disabled] .pagination-ellipsis {
    cursor: not-allowed;
  }

  .button,
  .file,
  .breadcrumb,
  .pagination-previous,
  .pagination-next,
  .pagination-link,
  .pagination-ellipsis,
  .tabs,
  .is-unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .select:not(.is-multiple):not(.is-loading)::after,
  .navbar-link:not(.is-arrowless)::after {
    border: 3px solid transparent;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: center;
    width: 0.625em;
  }

  .box:not(:last-child),
  .content:not(:last-child),
  .notification:not(:last-child),
  .progress:not(:last-child),
  .table:not(:last-child),
  .table-container:not(:last-child),
  .title:not(:last-child),
  .subtitle:not(:last-child),
  .block:not(:last-child),
  .breadcrumb:not(:last-child),
  .level:not(:last-child),
  .message:not(:last-child),
  .pagination:not(:last-child),
  .tabs:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .delete,
  .modal-close {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: rgba(10, 10, 10, 0.2);
    border: none;
    border-radius: 9999px;
    cursor: pointer;
    pointer-events: auto;
    display: inline-block;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 0;
    height: 20px;
    max-height: 20px;
    max-width: 20px;
    min-height: 20px;
    min-width: 20px;
    outline: none;
    position: relative;
    vertical-align: top;
    width: 20px;
  }

  .delete::before,
  .modal-close::before,
  .delete::after,
  .modal-close::after {
    background-color: white;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform-origin: center center;
  }

  .delete::before,
  .modal-close::before {
    height: 2px;
    width: 50%;
  }

  .delete::after,
  .modal-close::after {
    height: 50%;
    width: 2px;
  }

  .delete:hover,
  .modal-close:hover,
  .delete:focus,
  .modal-close:focus {
    background-color: rgba(10, 10, 10, 0.3);
  }

  .delete:active,
  .modal-close:active {
    background-color: rgba(10, 10, 10, 0.4);
  }

  .is-small.delete,
  .is-small.modal-close {
    height: 16px;
    max-height: 16px;
    max-width: 16px;
    min-height: 16px;
    min-width: 16px;
    width: 16px;
  }

  .is-medium.delete,
  .is-medium.modal-close {
    height: 24px;
    max-height: 24px;
    max-width: 24px;
    min-height: 24px;
    min-width: 24px;
    width: 24px;
  }

  .is-large.delete,
  .is-large.modal-close {
    height: 32px;
    max-height: 32px;
    max-width: 32px;
    min-height: 32px;
    min-width: 32px;
    width: 32px;
  }

  .button.is-loading::after,
  .loader,
  .select.is-loading::after,
  .control.is-loading::after {
    -webkit-animation: spinAround 500ms infinite linear;
    animation: spinAround 500ms infinite linear;
    border: 2px solid #dbdbdb;
    border-radius: 9999px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1em;
    position: relative;
    width: 1em;
  }

  .image.is-square img,
  .image.is-square .has-ratio,
  .image.is-1by1 img,
  .image.is-1by1 .has-ratio,
  .image.is-5by4 img,
  .image.is-5by4 .has-ratio,
  .image.is-4by3 img,
  .image.is-4by3 .has-ratio,
  .image.is-3by2 img,
  .image.is-3by2 .has-ratio,
  .image.is-5by3 img,
  .image.is-5by3 .has-ratio,
  .image.is-16by9 img,
  .image.is-16by9 .has-ratio,
  .image.is-2by1 img,
  .image.is-2by1 .has-ratio,
  .image.is-3by1 img,
  .image.is-3by1 .has-ratio,
  .image.is-4by5 img,
  .image.is-4by5 .has-ratio,
  .image.is-3by4 img,
  .image.is-3by4 .has-ratio,
  .image.is-2by3 img,
  .image.is-2by3 .has-ratio,
  .image.is-3by5 img,
  .image.is-3by5 .has-ratio,
  .image.is-9by16 img,
  .image.is-9by16 .has-ratio,
  .image.is-1by2 img,
  .image.is-1by2 .has-ratio,
  .image.is-1by3 img,
  .image.is-1by3 .has-ratio,
  .modal,
  .modal-background,
  .is-overlay,
  .hero-video {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .navbar-burger {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    color: currentColor;
    font-family: inherit;
    font-size: 1em;
    margin: 0;
    padding: 0;
  }

  /* Bulma Base */
  /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  td:not([align]),
  th:not([align]) {
    text-align: inherit;
  }

  html {
    background-color: white;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  article,
  aside,
  figure,
  footer,
  header,
  hgroup,
  section {
    display: block;
  }

  body,
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }

  code,
  pre {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-family: monospace;
  }

  body {
    color: #4a4a4a;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    color: #485fc7;
    cursor: pointer;
    text-decoration: none;
  }

  a strong {
    color: currentColor;
  }

  a:hover {
    color: #363636;
  }

  code {
    background-color: whitesmoke;
    color: #da1039;
    font-size: 0.875em;
    font-weight: normal;
    padding: 0.25em 0.5em 0.25em;
  }

  hr {
    background-color: whitesmoke;
    border: none;
    display: block;
    height: 2px;
    margin: 1.5rem 0;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  input[type="checkbox"],
  input[type="radio"] {
    vertical-align: baseline;
  }

  small {
    font-size: 0.875em;
  }

  span {
    font-style: inherit;
    font-weight: inherit;
  }

  strong {
    color: #363636;
    font-weight: 700;
  }

  fieldset {
    border: none;
  }

  pre {
    -webkit-overflow-scrolling: touch;
    background-color: whitesmoke;
    color: #4a4a4a;
    font-size: 0.875em;
    overflow-x: auto;
    padding: 1.25rem 1.5rem;
    white-space: pre;
    word-wrap: normal;
  }

  pre code {
    background-color: transparent;
    color: currentColor;
    font-size: 1em;
    padding: 0;
  }

  table td,
  table th {
    vertical-align: top;
  }

  table td:not([align]),
  table th:not([align]) {
    text-align: inherit;
  }

  table th {
    color: #363636;
  }

  @-webkit-keyframes spinAround {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  @keyframes spinAround {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  /* Bulma Elements */
  .box {
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0px 0 1px rgba(10, 10, 10, 0.02);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem;
  }

  a.box:hover,
  a.box:focus {
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #485fc7;
  }

  a.box:active {
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #485fc7;
  }

  .button {
    background-color: white;
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 1em;
    padding-right: 1em;
    padding-top: calc(0.5em - 1px);
    text-align: center;
    white-space: nowrap;
  }

  .button strong {
    color: inherit;
  }

  .button .icon,
  .button .icon.is-small,
  .button .icon.is-medium,
  .button .icon.is-large {
    height: 1.5em;
    width: 1.5em;
  }

  .button .icon:first-child:not(:last-child) {
    margin-left: calc(-0.5em - 1px);
    margin-right: 0.25em;
  }

  .button .icon:last-child:not(:first-child) {
    margin-left: 0.25em;
    margin-right: calc(-0.5em - 1px);
  }

  .button .icon:first-child:last-child {
    margin-left: calc(-0.5em - 1px);
    margin-right: calc(-0.5em - 1px);
  }

  .button:hover,
  .button.is-hovered {
    border-color: #b5b5b5;
    color: #363636;
  }

  .button:focus,
  .button.is-focused {
    border-color: #485fc7;
    color: #363636;
  }

  .button:focus:not(:active),
  .button.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
  }

  .button:active,
  .button.is-active {
    border-color: #4a4a4a;
    color: #363636;
  }

  .button.is-text {
    background-color: transparent;
    border-color: transparent;
    color: #4a4a4a;
    text-decoration: underline;
  }

  .button.is-text:hover,
  .button.is-text.is-hovered,
  .button.is-text:focus,
  .button.is-text.is-focused {
    background-color: whitesmoke;
    color: #363636;
  }

  .button.is-text:active,
  .button.is-text.is-active {
    background-color: #e8e8e8;
    color: #363636;
  }

  .button.is-text[disabled],
  fieldset[disabled] .button.is-text {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }

  .button.is-ghost {
    background: none;
    border-color: transparent;
    color: #485fc7;
    text-decoration: none;
  }

  .button.is-ghost:hover,
  .button.is-ghost.is-hovered {
    color: #485fc7;
    text-decoration: underline;
  }

  .button.is-white {
    background-color: white;
    border-color: transparent;
    color: #0a0a0a;
  }

  .button.is-white:hover,
  .button.is-white.is-hovered {
    background-color: #f9f9f9;
    border-color: transparent;
    color: #0a0a0a;
  }

  .button.is-white:focus,
  .button.is-white.is-focused {
    border-color: transparent;
    color: #0a0a0a;
  }

  .button.is-white:focus:not(:active),
  .button.is-white.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
  }

  .button.is-white:active,
  .button.is-white.is-active {
    background-color: #f2f2f2;
    border-color: transparent;
    color: #0a0a0a;
  }

  .button.is-white[disabled],
  fieldset[disabled] .button.is-white {
    background-color: white;
    border-color: white;
    box-shadow: none;
  }

  .button.is-white.is-inverted {
    background-color: #0a0a0a;
    color: white;
  }

  .button.is-white.is-inverted:hover,
  .button.is-white.is-inverted.is-hovered {
    background-color: black;
  }

  .button.is-white.is-inverted[disabled],
  fieldset[disabled] .button.is-white.is-inverted {
    background-color: #0a0a0a;
    border-color: transparent;
    box-shadow: none;
    color: white;
  }

  .button.is-white.is-loading::after {
    border-color: transparent transparent #0a0a0a #0a0a0a !important;
  }

  .button.is-white.is-outlined {
    background-color: transparent;
    border-color: white;
    color: white;
  }

  .button.is-white.is-outlined:hover,
  .button.is-white.is-outlined.is-hovered,
  .button.is-white.is-outlined:focus,
  .button.is-white.is-outlined.is-focused {
    background-color: white;
    border-color: white;
    color: #0a0a0a;
  }

  .button.is-white.is-outlined.is-loading::after {
    border-color: transparent transparent white white !important;
  }

  .button.is-white.is-outlined.is-loading:hover::after,
  .button.is-white.is-outlined.is-loading.is-hovered::after,
  .button.is-white.is-outlined.is-loading:focus::after,
  .button.is-white.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #0a0a0a #0a0a0a !important;
  }

  .button.is-white.is-outlined[disabled],
  fieldset[disabled] .button.is-white.is-outlined {
    background-color: transparent;
    border-color: white;
    box-shadow: none;
    color: white;
  }

  .button.is-white.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #0a0a0a;
    color: #0a0a0a;
  }

  .button.is-white.is-inverted.is-outlined:hover,
  .button.is-white.is-inverted.is-outlined.is-hovered,
  .button.is-white.is-inverted.is-outlined:focus,
  .button.is-white.is-inverted.is-outlined.is-focused {
    background-color: #0a0a0a;
    color: white;
  }

  .button.is-white.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-white.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent white white !important;
  }

  .button.is-white.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-white.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #0a0a0a;
    box-shadow: none;
    color: #0a0a0a;
  }

  .button.is-black {
    background-color: #0a0a0a;
    border-color: transparent;
    color: white;
  }

  .button.is-black:hover,
  .button.is-black.is-hovered {
    background-color: #040404;
    border-color: transparent;
    color: white;
  }

  .button.is-black:focus,
  .button.is-black.is-focused {
    border-color: transparent;
    color: white;
  }

  .button.is-black:focus:not(:active),
  .button.is-black.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
  }

  .button.is-black:active,
  .button.is-black.is-active {
    background-color: black;
    border-color: transparent;
    color: white;
  }

  .button.is-black[disabled],
  fieldset[disabled] .button.is-black {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    box-shadow: none;
  }

  .button.is-black.is-inverted {
    background-color: white;
    color: #0a0a0a;
  }

  .button.is-black.is-inverted:hover,
  .button.is-black.is-inverted.is-hovered {
    background-color: #f2f2f2;
  }

  .button.is-black.is-inverted[disabled],
  fieldset[disabled] .button.is-black.is-inverted {
    background-color: white;
    border-color: transparent;
    box-shadow: none;
    color: #0a0a0a;
  }

  .button.is-black.is-loading::after {
    border-color: transparent transparent white white !important;
  }

  .button.is-black.is-outlined {
    background-color: transparent;
    border-color: #0a0a0a;
    color: #0a0a0a;
  }

  .button.is-black.is-outlined:hover,
  .button.is-black.is-outlined.is-hovered,
  .button.is-black.is-outlined:focus,
  .button.is-black.is-outlined.is-focused {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    color: white;
  }

  .button.is-black.is-outlined.is-loading::after {
    border-color: transparent transparent #0a0a0a #0a0a0a !important;
  }

  .button.is-black.is-outlined.is-loading:hover::after,
  .button.is-black.is-outlined.is-loading.is-hovered::after,
  .button.is-black.is-outlined.is-loading:focus::after,
  .button.is-black.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent white white !important;
  }

  .button.is-black.is-outlined[disabled],
  fieldset[disabled] .button.is-black.is-outlined {
    background-color: transparent;
    border-color: #0a0a0a;
    box-shadow: none;
    color: #0a0a0a;
  }

  .button.is-black.is-inverted.is-outlined {
    background-color: transparent;
    border-color: white;
    color: white;
  }

  .button.is-black.is-inverted.is-outlined:hover,
  .button.is-black.is-inverted.is-outlined.is-hovered,
  .button.is-black.is-inverted.is-outlined:focus,
  .button.is-black.is-inverted.is-outlined.is-focused {
    background-color: white;
    color: #0a0a0a;
  }

  .button.is-black.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-black.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #0a0a0a #0a0a0a !important;
  }

  .button.is-black.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-black.is-inverted.is-outlined {
    background-color: transparent;
    border-color: white;
    box-shadow: none;
    color: white;
  }

  .button.is-light {
    background-color: whitesmoke;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-light:hover,
  .button.is-light.is-hovered {
    background-color: #eeeeee;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-light:focus,
  .button.is-light.is-focused {
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-light:focus:not(:active),
  .button.is-light.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
  }

  .button.is-light:active,
  .button.is-light.is-active {
    background-color: #e8e8e8;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-light[disabled],
  fieldset[disabled] .button.is-light {
    background-color: whitesmoke;
    border-color: whitesmoke;
    box-shadow: none;
  }

  .button.is-light.is-inverted {
    background-color: rgba(0, 0, 0, 0.7);
    color: whitesmoke;
  }

  .button.is-light.is-inverted:hover,
  .button.is-light.is-inverted.is-hovered {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .button.is-light.is-inverted[disabled],
  fieldset[disabled] .button.is-light.is-inverted {
    background-color: rgba(0, 0, 0, 0.7);
    border-color: transparent;
    box-shadow: none;
    color: whitesmoke;
  }

  .button.is-light.is-loading::after {
    border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
  }

  .button.is-light.is-outlined {
    background-color: transparent;
    border-color: whitesmoke;
    color: whitesmoke;
  }

  .button.is-light.is-outlined:hover,
  .button.is-light.is-outlined.is-hovered,
  .button.is-light.is-outlined:focus,
  .button.is-light.is-outlined.is-focused {
    background-color: whitesmoke;
    border-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-light.is-outlined.is-loading::after {
    border-color: transparent transparent whitesmoke whitesmoke !important;
  }

  .button.is-light.is-outlined.is-loading:hover::after,
  .button.is-light.is-outlined.is-loading.is-hovered::after,
  .button.is-light.is-outlined.is-loading:focus::after,
  .button.is-light.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
  }

  .button.is-light.is-outlined[disabled],
  fieldset[disabled] .button.is-light.is-outlined {
    background-color: transparent;
    border-color: whitesmoke;
    box-shadow: none;
    color: whitesmoke;
  }

  .button.is-light.is-inverted.is-outlined {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-light.is-inverted.is-outlined:hover,
  .button.is-light.is-inverted.is-outlined.is-hovered,
  .button.is-light.is-inverted.is-outlined:focus,
  .button.is-light.is-inverted.is-outlined.is-focused {
    background-color: rgba(0, 0, 0, 0.7);
    color: whitesmoke;
  }

  .button.is-light.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-light.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent whitesmoke whitesmoke !important;
  }

  .button.is-light.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-light.is-inverted.is-outlined {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.7);
    box-shadow: none;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-dark {
    background-color: #363636;
    border-color: transparent;
    color: #fff;
  }

  .button.is-dark:hover,
  .button.is-dark.is-hovered {
    background-color: #2f2f2f;
    border-color: transparent;
    color: #fff;
  }

  .button.is-dark:focus,
  .button.is-dark.is-focused {
    border-color: transparent;
    color: #fff;
  }

  .button.is-dark:focus:not(:active),
  .button.is-dark.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
  }

  .button.is-dark:active,
  .button.is-dark.is-active {
    background-color: #292929;
    border-color: transparent;
    color: #fff;
  }

  .button.is-dark[disabled],
  fieldset[disabled] .button.is-dark {
    background-color: #363636;
    border-color: #363636;
    box-shadow: none;
  }

  .button.is-dark.is-inverted {
    background-color: #fff;
    color: #363636;
  }

  .button.is-dark.is-inverted:hover,
  .button.is-dark.is-inverted.is-hovered {
    background-color: #f2f2f2;
  }

  .button.is-dark.is-inverted[disabled],
  fieldset[disabled] .button.is-dark.is-inverted {
    background-color: #fff;
    border-color: transparent;
    box-shadow: none;
    color: #363636;
  }

  .button.is-dark.is-loading::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-dark.is-outlined {
    background-color: transparent;
    border-color: #363636;
    color: #363636;
  }

  .button.is-dark.is-outlined:hover,
  .button.is-dark.is-outlined.is-hovered,
  .button.is-dark.is-outlined:focus,
  .button.is-dark.is-outlined.is-focused {
    background-color: #363636;
    border-color: #363636;
    color: #fff;
  }

  .button.is-dark.is-outlined.is-loading::after {
    border-color: transparent transparent #363636 #363636 !important;
  }

  .button.is-dark.is-outlined.is-loading:hover::after,
  .button.is-dark.is-outlined.is-loading.is-hovered::after,
  .button.is-dark.is-outlined.is-loading:focus::after,
  .button.is-dark.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-dark.is-outlined[disabled],
  fieldset[disabled] .button.is-dark.is-outlined {
    background-color: transparent;
    border-color: #363636;
    box-shadow: none;
    color: #363636;
  }

  .button.is-dark.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }

  .button.is-dark.is-inverted.is-outlined:hover,
  .button.is-dark.is-inverted.is-outlined.is-hovered,
  .button.is-dark.is-inverted.is-outlined:focus,
  .button.is-dark.is-inverted.is-outlined.is-focused {
    background-color: #fff;
    color: #363636;
  }

  .button.is-dark.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-dark.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #363636 #363636 !important;
  }

  .button.is-dark.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-dark.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    box-shadow: none;
    color: #fff;
  }

  .button.is-primary {
    background-color: #00d1b2;
    border-color: transparent;
    color: #fff;
  }

  .button.is-primary:hover,
  .button.is-primary.is-hovered {
    background-color: #00c4a7;
    border-color: transparent;
    color: #fff;
  }

  .button.is-primary:focus,
  .button.is-primary.is-focused {
    border-color: transparent;
    color: #fff;
  }

  .button.is-primary:focus:not(:active),
  .button.is-primary.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
  }

  .button.is-primary:active,
  .button.is-primary.is-active {
    background-color: #00b89c;
    border-color: transparent;
    color: #fff;
  }

  .button.is-primary[disabled],
  fieldset[disabled] .button.is-primary {
    background-color: #00d1b2;
    border-color: #00d1b2;
    box-shadow: none;
  }

  .button.is-primary.is-inverted {
    background-color: #fff;
    color: #00d1b2;
  }

  .button.is-primary.is-inverted:hover,
  .button.is-primary.is-inverted.is-hovered {
    background-color: #f2f2f2;
  }

  .button.is-primary.is-inverted[disabled],
  fieldset[disabled] .button.is-primary.is-inverted {
    background-color: #fff;
    border-color: transparent;
    box-shadow: none;
    color: #00d1b2;
  }

  .button.is-primary.is-loading::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-primary.is-outlined {
    background-color: transparent;
    border-color: #00d1b2;
    color: #00d1b2;
  }

  .button.is-primary.is-outlined:hover,
  .button.is-primary.is-outlined.is-hovered,
  .button.is-primary.is-outlined:focus,
  .button.is-primary.is-outlined.is-focused {
    background-color: #00d1b2;
    border-color: #00d1b2;
    color: #fff;
  }

  .button.is-primary.is-outlined.is-loading::after {
    border-color: transparent transparent #00d1b2 #00d1b2 !important;
  }

  .button.is-primary.is-outlined.is-loading:hover::after,
  .button.is-primary.is-outlined.is-loading.is-hovered::after,
  .button.is-primary.is-outlined.is-loading:focus::after,
  .button.is-primary.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-primary.is-outlined[disabled],
  fieldset[disabled] .button.is-primary.is-outlined {
    background-color: transparent;
    border-color: #00d1b2;
    box-shadow: none;
    color: #00d1b2;
  }

  .button.is-primary.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }

  .button.is-primary.is-inverted.is-outlined:hover,
  .button.is-primary.is-inverted.is-outlined.is-hovered,
  .button.is-primary.is-inverted.is-outlined:focus,
  .button.is-primary.is-inverted.is-outlined.is-focused {
    background-color: #fff;
    color: #00d1b2;
  }

  .button.is-primary.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-primary.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #00d1b2 #00d1b2 !important;
  }

  .button.is-primary.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-primary.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    box-shadow: none;
    color: #fff;
  }

  .button.is-primary.is-light {
    background-color: #ebfffc;
    color: #00947e;
  }

  .button.is-primary.is-light:hover,
  .button.is-primary.is-light.is-hovered {
    background-color: #defffa;
    border-color: transparent;
    color: #00947e;
  }

  .button.is-primary.is-light:active,
  .button.is-primary.is-light.is-active {
    background-color: #d1fff8;
    border-color: transparent;
    color: #00947e;
  }

  .button.is-link {
    background-color: #485fc7;
    border-color: transparent;
    color: #fff;
  }

  .button.is-link:hover,
  .button.is-link.is-hovered {
    background-color: #3e56c4;
    border-color: transparent;
    color: #fff;
  }

  .button.is-link:focus,
  .button.is-link.is-focused {
    border-color: transparent;
    color: #fff;
  }

  .button.is-link:focus:not(:active),
  .button.is-link.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
  }

  .button.is-link:active,
  .button.is-link.is-active {
    background-color: #3a51bb;
    border-color: transparent;
    color: #fff;
  }

  .button.is-link[disabled],
  fieldset[disabled] .button.is-link {
    background-color: #485fc7;
    border-color: #485fc7;
    box-shadow: none;
  }

  .button.is-link.is-inverted {
    background-color: #fff;
    color: #485fc7;
  }

  .button.is-link.is-inverted:hover,
  .button.is-link.is-inverted.is-hovered {
    background-color: #f2f2f2;
  }

  .button.is-link.is-inverted[disabled],
  fieldset[disabled] .button.is-link.is-inverted {
    background-color: #fff;
    border-color: transparent;
    box-shadow: none;
    color: #485fc7;
  }

  .button.is-link.is-loading::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-link.is-outlined {
    background-color: transparent;
    border-color: #485fc7;
    color: #485fc7;
  }

  .button.is-link.is-outlined:hover,
  .button.is-link.is-outlined.is-hovered,
  .button.is-link.is-outlined:focus,
  .button.is-link.is-outlined.is-focused {
    background-color: #485fc7;
    border-color: #485fc7;
    color: #fff;
  }

  .button.is-link.is-outlined.is-loading::after {
    border-color: transparent transparent #485fc7 #485fc7 !important;
  }

  .button.is-link.is-outlined.is-loading:hover::after,
  .button.is-link.is-outlined.is-loading.is-hovered::after,
  .button.is-link.is-outlined.is-loading:focus::after,
  .button.is-link.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-link.is-outlined[disabled],
  fieldset[disabled] .button.is-link.is-outlined {
    background-color: transparent;
    border-color: #485fc7;
    box-shadow: none;
    color: #485fc7;
  }

  .button.is-link.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }

  .button.is-link.is-inverted.is-outlined:hover,
  .button.is-link.is-inverted.is-outlined.is-hovered,
  .button.is-link.is-inverted.is-outlined:focus,
  .button.is-link.is-inverted.is-outlined.is-focused {
    background-color: #fff;
    color: #485fc7;
  }

  .button.is-link.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-link.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #485fc7 #485fc7 !important;
  }

  .button.is-link.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-link.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    box-shadow: none;
    color: #fff;
  }

  .button.is-link.is-light {
    background-color: #eff1fa;
    color: #3850b7;
  }

  .button.is-link.is-light:hover,
  .button.is-link.is-light.is-hovered {
    background-color: #e6e9f7;
    border-color: transparent;
    color: #3850b7;
  }

  .button.is-link.is-light:active,
  .button.is-link.is-light.is-active {
    background-color: #dce0f4;
    border-color: transparent;
    color: #3850b7;
  }

  .button.is-info {
    background-color: #3e8ed0;
    border-color: transparent;
    color: #fff;
  }

  .button.is-info:hover,
  .button.is-info.is-hovered {
    background-color: #3488ce;
    border-color: transparent;
    color: #fff;
  }

  .button.is-info:focus,
  .button.is-info.is-focused {
    border-color: transparent;
    color: #fff;
  }

  .button.is-info:focus:not(:active),
  .button.is-info.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);
  }

  .button.is-info:active,
  .button.is-info.is-active {
    background-color: #3082c5;
    border-color: transparent;
    color: #fff;
  }

  .button.is-info[disabled],
  fieldset[disabled] .button.is-info {
    background-color: #3e8ed0;
    border-color: #3e8ed0;
    box-shadow: none;
  }

  .button.is-info.is-inverted {
    background-color: #fff;
    color: #3e8ed0;
  }

  .button.is-info.is-inverted:hover,
  .button.is-info.is-inverted.is-hovered {
    background-color: #f2f2f2;
  }

  .button.is-info.is-inverted[disabled],
  fieldset[disabled] .button.is-info.is-inverted {
    background-color: #fff;
    border-color: transparent;
    box-shadow: none;
    color: #3e8ed0;
  }

  .button.is-info.is-loading::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-info.is-outlined {
    background-color: transparent;
    border-color: #3e8ed0;
    color: #3e8ed0;
  }

  .button.is-info.is-outlined:hover,
  .button.is-info.is-outlined.is-hovered,
  .button.is-info.is-outlined:focus,
  .button.is-info.is-outlined.is-focused {
    background-color: #3e8ed0;
    border-color: #3e8ed0;
    color: #fff;
  }

  .button.is-info.is-outlined.is-loading::after {
    border-color: transparent transparent #3e8ed0 #3e8ed0 !important;
  }

  .button.is-info.is-outlined.is-loading:hover::after,
  .button.is-info.is-outlined.is-loading.is-hovered::after,
  .button.is-info.is-outlined.is-loading:focus::after,
  .button.is-info.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-info.is-outlined[disabled],
  fieldset[disabled] .button.is-info.is-outlined {
    background-color: transparent;
    border-color: #3e8ed0;
    box-shadow: none;
    color: #3e8ed0;
  }

  .button.is-info.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }

  .button.is-info.is-inverted.is-outlined:hover,
  .button.is-info.is-inverted.is-outlined.is-hovered,
  .button.is-info.is-inverted.is-outlined:focus,
  .button.is-info.is-inverted.is-outlined.is-focused {
    background-color: #fff;
    color: #3e8ed0;
  }

  .button.is-info.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-info.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #3e8ed0 #3e8ed0 !important;
  }

  .button.is-info.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-info.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    box-shadow: none;
    color: #fff;
  }

  .button.is-info.is-light {
    background-color: #eff5fb;
    color: #296fa8;
  }

  .button.is-info.is-light:hover,
  .button.is-info.is-light.is-hovered {
    background-color: #e4eff9;
    border-color: transparent;
    color: #296fa8;
  }

  .button.is-info.is-light:active,
  .button.is-info.is-light.is-active {
    background-color: #dae9f6;
    border-color: transparent;
    color: #296fa8;
  }

  .button.is-success {
    background-color: #48c78e;
    border-color: transparent;
    color: #fff;
  }

  .button.is-success:hover,
  .button.is-success.is-hovered {
    background-color: #3ec487;
    border-color: transparent;
    color: #fff;
  }

  .button.is-success:focus,
  .button.is-success.is-focused {
    border-color: transparent;
    color: #fff;
  }

  .button.is-success:focus:not(:active),
  .button.is-success.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);
  }

  .button.is-success:active,
  .button.is-success.is-active {
    background-color: #3abb81;
    border-color: transparent;
    color: #fff;
  }

  .button.is-success[disabled],
  fieldset[disabled] .button.is-success {
    background-color: #48c78e;
    border-color: #48c78e;
    box-shadow: none;
  }

  .button.is-success.is-inverted {
    background-color: #fff;
    color: #48c78e;
  }

  .button.is-success.is-inverted:hover,
  .button.is-success.is-inverted.is-hovered {
    background-color: #f2f2f2;
  }

  .button.is-success.is-inverted[disabled],
  fieldset[disabled] .button.is-success.is-inverted {
    background-color: #fff;
    border-color: transparent;
    box-shadow: none;
    color: #48c78e;
  }

  .button.is-success.is-loading::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-success.is-outlined {
    background-color: transparent;
    border-color: #48c78e;
    color: #48c78e;
  }

  .button.is-success.is-outlined:hover,
  .button.is-success.is-outlined.is-hovered,
  .button.is-success.is-outlined:focus,
  .button.is-success.is-outlined.is-focused {
    background-color: #48c78e;
    border-color: #48c78e;
    color: #fff;
  }

  .button.is-success.is-outlined.is-loading::after {
    border-color: transparent transparent #48c78e #48c78e !important;
  }

  .button.is-success.is-outlined.is-loading:hover::after,
  .button.is-success.is-outlined.is-loading.is-hovered::after,
  .button.is-success.is-outlined.is-loading:focus::after,
  .button.is-success.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-success.is-outlined[disabled],
  fieldset[disabled] .button.is-success.is-outlined {
    background-color: transparent;
    border-color: #48c78e;
    box-shadow: none;
    color: #48c78e;
  }

  .button.is-success.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }

  .button.is-success.is-inverted.is-outlined:hover,
  .button.is-success.is-inverted.is-outlined.is-hovered,
  .button.is-success.is-inverted.is-outlined:focus,
  .button.is-success.is-inverted.is-outlined.is-focused {
    background-color: #fff;
    color: #48c78e;
  }

  .button.is-success.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-success.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #48c78e #48c78e !important;
  }

  .button.is-success.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-success.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    box-shadow: none;
    color: #fff;
  }

  .button.is-success.is-light {
    background-color: #effaf5;
    color: #257953;
  }

  .button.is-success.is-light:hover,
  .button.is-success.is-light.is-hovered {
    background-color: #e6f7ef;
    border-color: transparent;
    color: #257953;
  }

  .button.is-success.is-light:active,
  .button.is-success.is-light.is-active {
    background-color: #dcf4e9;
    border-color: transparent;
    color: #257953;
  }

  .button.is-warning {
    background-color: #ffe08a;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-warning:hover,
  .button.is-warning.is-hovered {
    background-color: #ffdc7d;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-warning:focus,
  .button.is-warning.is-focused {
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-warning:focus:not(:active),
  .button.is-warning.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);
  }

  .button.is-warning:active,
  .button.is-warning.is-active {
    background-color: #ffd970;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-warning[disabled],
  fieldset[disabled] .button.is-warning {
    background-color: #ffe08a;
    border-color: #ffe08a;
    box-shadow: none;
  }

  .button.is-warning.is-inverted {
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffe08a;
  }

  .button.is-warning.is-inverted:hover,
  .button.is-warning.is-inverted.is-hovered {
    background-color: rgba(0, 0, 0, 0.7);
  }

  .button.is-warning.is-inverted[disabled],
  fieldset[disabled] .button.is-warning.is-inverted {
    background-color: rgba(0, 0, 0, 0.7);
    border-color: transparent;
    box-shadow: none;
    color: #ffe08a;
  }

  .button.is-warning.is-loading::after {
    border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
  }

  .button.is-warning.is-outlined {
    background-color: transparent;
    border-color: #ffe08a;
    color: #ffe08a;
  }

  .button.is-warning.is-outlined:hover,
  .button.is-warning.is-outlined.is-hovered,
  .button.is-warning.is-outlined:focus,
  .button.is-warning.is-outlined.is-focused {
    background-color: #ffe08a;
    border-color: #ffe08a;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-warning.is-outlined.is-loading::after {
    border-color: transparent transparent #ffe08a #ffe08a !important;
  }

  .button.is-warning.is-outlined.is-loading:hover::after,
  .button.is-warning.is-outlined.is-loading.is-hovered::after,
  .button.is-warning.is-outlined.is-loading:focus::after,
  .button.is-warning.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
  }

  .button.is-warning.is-outlined[disabled],
  fieldset[disabled] .button.is-warning.is-outlined {
    background-color: transparent;
    border-color: #ffe08a;
    box-shadow: none;
    color: #ffe08a;
  }

  .button.is-warning.is-inverted.is-outlined {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-warning.is-inverted.is-outlined:hover,
  .button.is-warning.is-inverted.is-outlined.is-hovered,
  .button.is-warning.is-inverted.is-outlined:focus,
  .button.is-warning.is-inverted.is-outlined.is-focused {
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffe08a;
  }

  .button.is-warning.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-warning.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #ffe08a #ffe08a !important;
  }

  .button.is-warning.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-warning.is-inverted.is-outlined {
    background-color: transparent;
    border-color: rgba(0, 0, 0, 0.7);
    box-shadow: none;
    color: rgba(0, 0, 0, 0.7);
  }

  .button.is-warning.is-light {
    background-color: #fffaeb;
    color: #946c00;
  }

  .button.is-warning.is-light:hover,
  .button.is-warning.is-light.is-hovered {
    background-color: #fff6de;
    border-color: transparent;
    color: #946c00;
  }

  .button.is-warning.is-light:active,
  .button.is-warning.is-light.is-active {
    background-color: #fff3d1;
    border-color: transparent;
    color: #946c00;
  }

  .button.is-danger {
    background-color: #f14668;
    border-color: transparent;
    color: #fff;
  }

  .button.is-danger:hover,
  .button.is-danger.is-hovered {
    background-color: #f03a5f;
    border-color: transparent;
    color: #fff;
  }

  .button.is-danger:focus,
  .button.is-danger.is-focused {
    border-color: transparent;
    color: #fff;
  }

  .button.is-danger:focus:not(:active),
  .button.is-danger.is-focused:not(:active) {
    box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
  }

  .button.is-danger:active,
  .button.is-danger.is-active {
    background-color: #ef2e55;
    border-color: transparent;
    color: #fff;
  }

  .button.is-danger[disabled],
  fieldset[disabled] .button.is-danger {
    background-color: #f14668;
    border-color: #f14668;
    box-shadow: none;
  }

  .button.is-danger.is-inverted {
    background-color: #fff;
    color: #f14668;
  }

  .button.is-danger.is-inverted:hover,
  .button.is-danger.is-inverted.is-hovered {
    background-color: #f2f2f2;
  }

  .button.is-danger.is-inverted[disabled],
  fieldset[disabled] .button.is-danger.is-inverted {
    background-color: #fff;
    border-color: transparent;
    box-shadow: none;
    color: #f14668;
  }

  .button.is-danger.is-loading::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-danger.is-outlined {
    background-color: transparent;
    border-color: #f14668;
    color: #f14668;
  }

  .button.is-danger.is-outlined:hover,
  .button.is-danger.is-outlined.is-hovered,
  .button.is-danger.is-outlined:focus,
  .button.is-danger.is-outlined.is-focused {
    background-color: #f14668;
    border-color: #f14668;
    color: #fff;
  }

  .button.is-danger.is-outlined.is-loading::after {
    border-color: transparent transparent #f14668 #f14668 !important;
  }

  .button.is-danger.is-outlined.is-loading:hover::after,
  .button.is-danger.is-outlined.is-loading.is-hovered::after,
  .button.is-danger.is-outlined.is-loading:focus::after,
  .button.is-danger.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #fff #fff !important;
  }

  .button.is-danger.is-outlined[disabled],
  fieldset[disabled] .button.is-danger.is-outlined {
    background-color: transparent;
    border-color: #f14668;
    box-shadow: none;
    color: #f14668;
  }

  .button.is-danger.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff;
  }

  .button.is-danger.is-inverted.is-outlined:hover,
  .button.is-danger.is-inverted.is-outlined.is-hovered,
  .button.is-danger.is-inverted.is-outlined:focus,
  .button.is-danger.is-inverted.is-outlined.is-focused {
    background-color: #fff;
    color: #f14668;
  }

  .button.is-danger.is-inverted.is-outlined.is-loading:hover::after,
  .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after,
  .button.is-danger.is-inverted.is-outlined.is-loading:focus::after,
  .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {
    border-color: transparent transparent #f14668 #f14668 !important;
  }

  .button.is-danger.is-inverted.is-outlined[disabled],
  fieldset[disabled] .button.is-danger.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    box-shadow: none;
    color: #fff;
  }

  .button.is-danger.is-light {
    background-color: #feecf0;
    color: #cc0f35;
  }

  .button.is-danger.is-light:hover,
  .button.is-danger.is-light.is-hovered {
    background-color: #fde0e6;
    border-color: transparent;
    color: #cc0f35;
  }

  .button.is-danger.is-light:active,
  .button.is-danger.is-light.is-active {
    background-color: #fcd4dc;
    border-color: transparent;
    color: #cc0f35;
  }

  .button.is-small {
    font-size: 0.75rem;
  }

  .button.is-small:not(.is-rounded) {
    border-radius: 2px;
  }

  .button.is-normal {
    font-size: 1rem;
  }

  .button.is-medium {
    font-size: 1.25rem;
  }

  .button.is-large {
    font-size: 1.5rem;
  }

  .button[disabled],
  fieldset[disabled] .button {
    background-color: white;
    border-color: #dbdbdb;
    box-shadow: none;
    opacity: 0.5;
  }

  .button.is-fullwidth {
    display: flex;
    width: 100%;
  }

  .button.is-loading {
    color: transparent !important;
    pointer-events: none;
  }

  .button.is-loading::after {
    position: absolute;
    left: calc(50% - (1em * 0.5));
    top: calc(50% - (1em * 0.5));
    position: absolute !important;
  }

  .button.is-static {
    background-color: whitesmoke;
    border-color: #dbdbdb;
    color: #7a7a7a;
    box-shadow: none;
    pointer-events: none;
  }

  .button.is-rounded {
    border-radius: 9999px;
    padding-left: calc(1em + 0.25em);
    padding-right: calc(1em + 0.25em);
  }

  .buttons {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .buttons .button {
    margin-bottom: 0.5rem;
  }

  .buttons .button:not(:last-child):not(.is-fullwidth) {
    margin-right: 0.5rem;
  }

  .buttons:last-child {
    margin-bottom: -0.5rem;
  }

  .buttons:not(:last-child) {
    margin-bottom: 1rem;
  }

  .buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {
    font-size: 0.75rem;
  }

  .buttons.are-small
    .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {
    border-radius: 2px;
  }

  .buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {
    font-size: 1.25rem;
  }

  .buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {
    font-size: 1.5rem;
  }

  .buttons.has-addons .button:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .buttons.has-addons .button:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    margin-right: -1px;
  }

  .buttons.has-addons .button:last-child {
    margin-right: 0;
  }

  .buttons.has-addons .button:hover,
  .buttons.has-addons .button.is-hovered {
    z-index: 2;
  }

  .buttons.has-addons .button:focus,
  .buttons.has-addons .button.is-focused,
  .buttons.has-addons .button:active,
  .buttons.has-addons .button.is-active,
  .buttons.has-addons .button.is-selected {
    z-index: 3;
  }

  .buttons.has-addons .button:focus:hover,
  .buttons.has-addons .button.is-focused:hover,
  .buttons.has-addons .button:active:hover,
  .buttons.has-addons .button.is-active:hover,
  .buttons.has-addons .button.is-selected:hover {
    z-index: 4;
  }

  .buttons.has-addons .button.is-expanded {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .buttons.is-centered {
    justify-content: center;
  }

  .buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  .buttons.is-right {
    justify-content: flex-end;
  }

  .buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }

  @media screen and (max-width: 768px) {
    .button.is-responsive.is-small {
      font-size: 0.5625rem;
    }
    .button.is-responsive,
    .button.is-responsive.is-normal {
      font-size: 0.65625rem;
    }
    .button.is-responsive.is-medium {
      font-size: 0.75rem;
    }
    .button.is-responsive.is-large {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .button.is-responsive.is-small {
      font-size: 0.65625rem;
    }
    .button.is-responsive,
    .button.is-responsive.is-normal {
      font-size: 0.75rem;
    }
    .button.is-responsive.is-medium {
      font-size: 1rem;
    }
    .button.is-responsive.is-large {
      font-size: 1.25rem;
    }
  }

  .container {
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
  }

  .container.is-fluid {
    max-width: none !important;
    padding-left: 32px;
    padding-right: 32px;
    width: 100%;
  }

  @media screen and (min-width: 1024px) {
    .container {
      max-width: 960px;
    }
  }

  @media screen and (max-width: 1215px) {
    .container.is-widescreen:not(.is-max-desktop) {
      max-width: 1152px;
    }
  }

  @media screen and (max-width: 1407px) {
    .container.is-fullhd:not(.is-max-desktop):not(.is-max-widescreen) {
      max-width: 1344px;
    }
  }

  @media screen and (min-width: 1216px) {
    .container:not(.is-max-desktop) {
      max-width: 1152px;
    }
  }

  @media screen and (min-width: 1408px) {
    .container:not(.is-max-desktop):not(.is-max-widescreen) {
      max-width: 1344px;
    }
  }

  .content li + li {
    margin-top: 0.25em;
  }

  .content p:not(:last-child),
  .content dl:not(:last-child),
  .content ol:not(:last-child),
  .content ul:not(:last-child),
  .content blockquote:not(:last-child),
  .content pre:not(:last-child),
  .content table:not(:last-child) {
    margin-bottom: 1em;
  }

  .content h1,
  .content h2,
  .content h3,
  .content h4,
  .content h5,
  .content h6 {
    color: #363636;
    font-weight: 600;
    line-height: 1.125;
  }

  .content h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  .content h1:not(:first-child) {
    margin-top: 1em;
  }

  .content h2 {
    font-size: 1.75em;
    margin-bottom: 0.5714em;
  }

  .content h2:not(:first-child) {
    margin-top: 1.1428em;
  }

  .content h3 {
    font-size: 1.5em;
    margin-bottom: 0.6666em;
  }

  .content h3:not(:first-child) {
    margin-top: 1.3333em;
  }

  .content h4 {
    font-size: 1.25em;
    margin-bottom: 0.8em;
  }

  .content h5 {
    font-size: 1.125em;
    margin-bottom: 0.8888em;
  }

  .content h6 {
    font-size: 1em;
    margin-bottom: 1em;
  }

  .content blockquote {
    background-color: whitesmoke;
    border-left: 5px solid #dbdbdb;
    padding: 1.25em 1.5em;
  }

  .content ol {
    list-style-position: outside;
    margin-left: 2em;
    margin-top: 1em;
  }

  .content ol:not([type]) {
    list-style-type: decimal;
  }

  .content ol:not([type]).is-lower-alpha {
    list-style-type: lower-alpha;
  }

  .content ol:not([type]).is-lower-roman {
    list-style-type: lower-roman;
  }

  .content ol:not([type]).is-upper-alpha {
    list-style-type: upper-alpha;
  }

  .content ol:not([type]).is-upper-roman {
    list-style-type: upper-roman;
  }

  .content ul {
    list-style: disc outside;
    margin-left: 2em;
    margin-top: 1em;
  }

  .content ul ul {
    list-style-type: circle;
    margin-top: 0.5em;
  }

  .content ul ul ul {
    list-style-type: square;
  }

  .content dd {
    margin-left: 2em;
  }

  .content figure {
    margin-left: 2em;
    margin-right: 2em;
    text-align: center;
  }

  .content figure:not(:first-child) {
    margin-top: 2em;
  }

  .content figure:not(:last-child) {
    margin-bottom: 2em;
  }

  .content figure img {
    display: inline-block;
  }

  .content figure figcaption {
    font-style: italic;
  }

  .content pre {
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    padding: 1.25em 1.5em;
    white-space: pre;
    word-wrap: normal;
  }

  .content sup,
  .content sub {
    font-size: 75%;
  }

  .content table {
    width: 100%;
  }

  .content table td,
  .content table th {
    border: 1px solid #dbdbdb;
    border-width: 0 0 1px;
    padding: 0.5em 0.75em;
    vertical-align: top;
  }

  .content table th {
    color: #363636;
  }

  .content table th:not([align]) {
    text-align: inherit;
  }

  .content table thead td,
  .content table thead th {
    border-width: 0 0 2px;
    color: #363636;
  }

  .content table tfoot td,
  .content table tfoot th {
    border-width: 2px 0 0;
    color: #363636;
  }

  .content table tbody tr:last-child td,
  .content table tbody tr:last-child th {
    border-bottom-width: 0;
  }

  .content .tabs li + li {
    margin-top: 0;
  }

  .content.is-small {
    font-size: 0.75rem;
  }

  .content.is-normal {
    font-size: 1rem;
  }

  .content.is-medium {
    font-size: 1.25rem;
  }

  .content.is-large {
    font-size: 1.5rem;
  }

  .icon {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem;
  }

  .icon.is-small {
    height: 1rem;
    width: 1rem;
  }

  .icon.is-medium {
    height: 2rem;
    width: 2rem;
  }

  .icon.is-large {
    height: 3rem;
    width: 3rem;
  }

  .icon-text {
    align-items: flex-start;
    color: inherit;
    display: inline-flex;
    flex-wrap: wrap;
    line-height: 1.5rem;
    vertical-align: top;
  }

  .icon-text .icon {
    flex-grow: 0;
    flex-shrink: 0;
  }

  .icon-text .icon:not(:last-child) {
    margin-right: 0.25em;
  }

  .icon-text .icon:not(:first-child) {
    margin-left: 0.25em;
  }

  div.icon-text {
    display: flex;
  }

  .image {
    display: block;
    position: relative;
  }

  .image img {
    display: block;
    height: auto;
    width: 100%;
  }

  .image img.is-rounded {
    border-radius: 9999px;
  }

  .image.is-fullwidth {
    width: 100%;
  }

  .image.is-square img,
  .image.is-square .has-ratio,
  .image.is-1by1 img,
  .image.is-1by1 .has-ratio,
  .image.is-5by4 img,
  .image.is-5by4 .has-ratio,
  .image.is-4by3 img,
  .image.is-4by3 .has-ratio,
  .image.is-3by2 img,
  .image.is-3by2 .has-ratio,
  .image.is-5by3 img,
  .image.is-5by3 .has-ratio,
  .image.is-16by9 img,
  .image.is-16by9 .has-ratio,
  .image.is-2by1 img,
  .image.is-2by1 .has-ratio,
  .image.is-3by1 img,
  .image.is-3by1 .has-ratio,
  .image.is-4by5 img,
  .image.is-4by5 .has-ratio,
  .image.is-3by4 img,
  .image.is-3by4 .has-ratio,
  .image.is-2by3 img,
  .image.is-2by3 .has-ratio,
  .image.is-3by5 img,
  .image.is-3by5 .has-ratio,
  .image.is-9by16 img,
  .image.is-9by16 .has-ratio,
  .image.is-1by2 img,
  .image.is-1by2 .has-ratio,
  .image.is-1by3 img,
  .image.is-1by3 .has-ratio {
    height: 100%;
    width: 100%;
  }

  .image.is-square,
  .image.is-1by1 {
    padding-top: 100%;
  }

  .image.is-5by4 {
    padding-top: 80%;
  }

  .image.is-4by3 {
    padding-top: 75%;
  }

  .image.is-3by2 {
    padding-top: 66.6666%;
  }

  .image.is-5by3 {
    padding-top: 60%;
  }

  .image.is-16by9 {
    padding-top: 56.25%;
  }

  .image.is-2by1 {
    padding-top: 50%;
  }

  .image.is-3by1 {
    padding-top: 33.3333%;
  }

  .image.is-4by5 {
    padding-top: 125%;
  }

  .image.is-3by4 {
    padding-top: 133.3333%;
  }

  .image.is-2by3 {
    padding-top: 150%;
  }

  .image.is-3by5 {
    padding-top: 166.6666%;
  }

  .image.is-9by16 {
    padding-top: 177.7777%;
  }

  .image.is-1by2 {
    padding-top: 200%;
  }

  .image.is-1by3 {
    padding-top: 300%;
  }

  .image.is-16x16 {
    height: 16px;
    width: 16px;
  }

  .image.is-24x24 {
    height: 24px;
    width: 24px;
  }

  .image.is-32x32 {
    height: 32px;
    width: 32px;
  }

  .image.is-48x48 {
    height: 48px;
    width: 48px;
  }

  .image.is-64x64 {
    height: 64px;
    width: 64px;
  }

  .image.is-96x96 {
    height: 96px;
    width: 96px;
  }

  .image.is-128x128 {
    height: 128px;
    width: 128px;
  }

  .notification {
    background-color: whitesmoke;
    border-radius: 4px;
    position: relative;
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  }

  .notification a:not(.button):not(.dropdown-item) {
    color: currentColor;
    text-decoration: underline;
  }

  .notification strong {
    color: currentColor;
  }

  .notification code,
  .notification pre {
    background: white;
  }

  .notification pre code {
    background: transparent;
  }

  .notification > .delete {
    right: 0.5rem;
    position: absolute;
    top: 0.5rem;
  }

  .notification .title,
  .notification .subtitle,
  .notification .content {
    color: currentColor;
  }

  .notification.is-white {
    background-color: white;
    color: #0a0a0a;
  }

  .notification.is-black {
    background-color: #0a0a0a;
    color: white;
  }

  .notification.is-light {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }

  .notification.is-dark {
    background-color: #363636;
    color: #fff;
  }

  .notification.is-primary {
    background-color: #00d1b2;
    color: #fff;
  }

  .notification.is-primary.is-light {
    background-color: #ebfffc;
    color: #00947e;
  }

  .notification.is-link {
    background-color: #485fc7;
    color: #fff;
  }

  .notification.is-link.is-light {
    background-color: #eff1fa;
    color: #3850b7;
  }

  .notification.is-info {
    background-color: #3e8ed0;
    color: #fff;
  }

  .notification.is-info.is-light {
    background-color: #eff5fb;
    color: #296fa8;
  }

  .notification.is-success {
    background-color: #48c78e;
    color: #fff;
  }

  .notification.is-success.is-light {
    background-color: #effaf5;
    color: #257953;
  }

  .notification.is-warning {
    background-color: #ffe08a;
    color: rgba(0, 0, 0, 0.7);
  }

  .notification.is-warning.is-light {
    background-color: #fffaeb;
    color: #946c00;
  }

  .notification.is-danger {
    background-color: #f14668;
    color: #fff;
  }

  .notification.is-danger.is-light {
    background-color: #feecf0;
    color: #cc0f35;
  }

  .progress {
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    border-radius: 9999px;
    display: block;
    height: 1rem;
    overflow: hidden;
    padding: 0;
    width: 100%;
  }

  .progress::-webkit-progress-bar {
    background-color: #ededed;
  }

  .progress::-webkit-progress-value {
    background-color: #4a4a4a;
  }

  .progress::-moz-progress-bar {
    background-color: #4a4a4a;
  }

  .progress::-ms-fill {
    background-color: #4a4a4a;
    border: none;
  }

  .progress.is-white::-webkit-progress-value {
    background-color: white;
  }

  .progress.is-white::-moz-progress-bar {
    background-color: white;
  }

  .progress.is-white::-ms-fill {
    background-color: white;
  }

  .progress.is-white:indeterminate {
    background-image: linear-gradient(to right, white 30%, #ededed 30%);
  }

  .progress.is-black::-webkit-progress-value {
    background-color: #0a0a0a;
  }

  .progress.is-black::-moz-progress-bar {
    background-color: #0a0a0a;
  }

  .progress.is-black::-ms-fill {
    background-color: #0a0a0a;
  }

  .progress.is-black:indeterminate {
    background-image: linear-gradient(to right, #0a0a0a 30%, #ededed 30%);
  }

  .progress.is-light::-webkit-progress-value {
    background-color: whitesmoke;
  }

  .progress.is-light::-moz-progress-bar {
    background-color: whitesmoke;
  }

  .progress.is-light::-ms-fill {
    background-color: whitesmoke;
  }

  .progress.is-light:indeterminate {
    background-image: linear-gradient(to right, whitesmoke 30%, #ededed 30%);
  }

  .progress.is-dark::-webkit-progress-value {
    background-color: #363636;
  }

  .progress.is-dark::-moz-progress-bar {
    background-color: #363636;
  }

  .progress.is-dark::-ms-fill {
    background-color: #363636;
  }

  .progress.is-dark:indeterminate {
    background-image: linear-gradient(to right, #363636 30%, #ededed 30%);
  }

  .progress.is-primary::-webkit-progress-value {
    background-color: #00d1b2;
  }

  .progress.is-primary::-moz-progress-bar {
    background-color: #00d1b2;
  }

  .progress.is-primary::-ms-fill {
    background-color: #00d1b2;
  }

  .progress.is-primary:indeterminate {
    background-image: linear-gradient(to right, #00d1b2 30%, #ededed 30%);
  }

  .progress.is-link::-webkit-progress-value {
    background-color: #485fc7;
  }

  .progress.is-link::-moz-progress-bar {
    background-color: #485fc7;
  }

  .progress.is-link::-ms-fill {
    background-color: #485fc7;
  }

  .progress.is-link:indeterminate {
    background-image: linear-gradient(to right, #485fc7 30%, #ededed 30%);
  }

  .progress.is-info::-webkit-progress-value {
    background-color: #3e8ed0;
  }

  .progress.is-info::-moz-progress-bar {
    background-color: #3e8ed0;
  }

  .progress.is-info::-ms-fill {
    background-color: #3e8ed0;
  }

  .progress.is-info:indeterminate {
    background-image: linear-gradient(to right, #3e8ed0 30%, #ededed 30%);
  }

  .progress.is-success::-webkit-progress-value {
    background-color: #48c78e;
  }

  .progress.is-success::-moz-progress-bar {
    background-color: #48c78e;
  }

  .progress.is-success::-ms-fill {
    background-color: #48c78e;
  }

  .progress.is-success:indeterminate {
    background-image: linear-gradient(to right, #48c78e 30%, #ededed 30%);
  }

  .progress.is-warning::-webkit-progress-value {
    background-color: #ffe08a;
  }

  .progress.is-warning::-moz-progress-bar {
    background-color: #ffe08a;
  }

  .progress.is-warning::-ms-fill {
    background-color: #ffe08a;
  }

  .progress.is-warning:indeterminate {
    background-image: linear-gradient(to right, #ffe08a 30%, #ededed 30%);
  }

  .progress.is-danger::-webkit-progress-value {
    background-color: #f14668;
  }

  .progress.is-danger::-moz-progress-bar {
    background-color: #f14668;
  }

  .progress.is-danger::-ms-fill {
    background-color: #f14668;
  }

  .progress.is-danger:indeterminate {
    background-image: linear-gradient(to right, #f14668 30%, #ededed 30%);
  }

  .progress:indeterminate {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: moveIndeterminate;
    animation-name: moveIndeterminate;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    background-color: #ededed;
    background-image: linear-gradient(to right, #4a4a4a 30%, #ededed 30%);
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 150% 150%;
  }

  .progress:indeterminate::-webkit-progress-bar {
    background-color: transparent;
  }

  .progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }

  .progress:indeterminate::-ms-fill {
    animation-name: none;
  }

  .progress.is-small {
    height: 0.75rem;
  }

  .progress.is-medium {
    height: 1.25rem;
  }

  .progress.is-large {
    height: 1.5rem;
  }

  @-webkit-keyframes moveIndeterminate {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes moveIndeterminate {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  .table {
    background-color: white;
    color: #363636;
  }

  .table td,
  .table th {
    border: 1px solid #dbdbdb;
    border-width: 0 0 1px;
    padding: 0.5em 0.75em;
    vertical-align: top;
  }

  .table td.is-white,
  .table th.is-white {
    background-color: white;
    border-color: white;
    color: #0a0a0a;
  }

  .table td.is-black,
  .table th.is-black {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    color: white;
  }

  .table td.is-light,
  .table th.is-light {
    background-color: whitesmoke;
    border-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }

  .table td.is-dark,
  .table th.is-dark {
    background-color: #363636;
    border-color: #363636;
    color: #fff;
  }

  .table td.is-primary,
  .table th.is-primary {
    background-color: #00d1b2;
    border-color: #00d1b2;
    color: #fff;
  }

  .table td.is-link,
  .table th.is-link {
    background-color: #485fc7;
    border-color: #485fc7;
    color: #fff;
  }

  .table td.is-info,
  .table th.is-info {
    background-color: #3e8ed0;
    border-color: #3e8ed0;
    color: #fff;
  }

  .table td.is-success,
  .table th.is-success {
    background-color: #48c78e;
    border-color: #48c78e;
    color: #fff;
  }

  .table td.is-warning,
  .table th.is-warning {
    background-color: #ffe08a;
    border-color: #ffe08a;
    color: rgba(0, 0, 0, 0.7);
  }

  .table td.is-danger,
  .table th.is-danger {
    background-color: #f14668;
    border-color: #f14668;
    color: #fff;
  }

  .table td.is-narrow,
  .table th.is-narrow {
    white-space: nowrap;
    width: 1%;
  }

  .table td.is-selected,
  .table th.is-selected {
    background-color: #00d1b2;
    color: #fff;
  }

  .table td.is-selected a,
  .table td.is-selected strong,
  .table th.is-selected a,
  .table th.is-selected strong {
    color: currentColor;
  }

  .table td.is-vcentered,
  .table th.is-vcentered {
    vertical-align: middle;
  }

  .table th {
    color: #363636;
  }

  .table th:not([align]) {
    text-align: left;
  }

  .table tr.is-selected {
    background-color: #00d1b2;
    color: #fff;
  }

  .table tr.is-selected a,
  .table tr.is-selected strong {
    color: currentColor;
  }

  .table tr.is-selected td,
  .table tr.is-selected th {
    border-color: #fff;
    color: currentColor;
  }

  .table thead {
    background-color: transparent;
  }

  .table thead td,
  .table thead th {
    border-width: 0 0 2px;
    color: #363636;
  }

  .table tfoot {
    background-color: transparent;
  }

  .table tfoot td,
  .table tfoot th {
    border-width: 2px 0 0;
    color: #363636;
  }

  .table tbody {
    background-color: transparent;
  }

  .table tbody tr:last-child td,
  .table tbody tr:last-child th {
    border-bottom-width: 0;
  }

  .table.is-bordered td,
  .table.is-bordered th {
    border-width: 1px;
  }

  .table.is-bordered tr:last-child td,
  .table.is-bordered tr:last-child th {
    border-bottom-width: 1px;
  }

  .table.is-fullwidth {
    width: 100%;
  }

  .table.is-hoverable tbody tr:not(.is-selected):hover {
    background-color: #fafafa;
  }

  .table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {
    background-color: #fafafa;
  }

  .table.is-hoverable.is-striped
    tbody
    tr:not(.is-selected):hover:nth-child(even) {
    background-color: whitesmoke;
  }

  .table.is-narrow td,
  .table.is-narrow th {
    padding: 0.25em 0.5em;
  }

  .table.is-striped tbody tr:not(.is-selected):nth-child(even) {
    background-color: #fafafa;
  }

  .table-container {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    overflow-y: hidden;
    max-width: 100%;
  }

  .tags {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .tags .tag {
    margin-bottom: 0.5rem;
  }

  .tags .tag:not(:last-child) {
    margin-right: 0.5rem;
  }

  .tags:last-child {
    margin-bottom: -0.5rem;
  }

  .tags:not(:last-child) {
    margin-bottom: 1rem;
  }

  .tags.are-medium .tag:not(.is-normal):not(.is-large) {
    font-size: 1rem;
  }

  .tags.are-large .tag:not(.is-normal):not(.is-medium) {
    font-size: 1.25rem;
  }

  .tags.is-centered {
    justify-content: center;
  }

  .tags.is-centered .tag {
    margin-right: 0.25rem;
    margin-left: 0.25rem;
  }

  .tags.is-right {
    justify-content: flex-end;
  }

  .tags.is-right .tag:not(:first-child) {
    margin-left: 0.5rem;
  }

  .tags.is-right .tag:not(:last-child) {
    margin-right: 0;
  }

  .tags.has-addons .tag {
    margin-right: 0;
  }

  .tags.has-addons .tag:not(:first-child) {
    margin-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .tags.has-addons .tag:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .tag:not(body) {
    align-items: center;
    background-color: whitesmoke;
    border-radius: 4px;
    color: #4a4a4a;
    display: inline-flex;
    font-size: 0.75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
  }

  .tag:not(body) .delete {
    margin-left: 0.25rem;
    margin-right: -0.375rem;
  }

  .tag:not(body).is-white {
    background-color: white;
    color: #0a0a0a;
  }

  .tag:not(body).is-black {
    background-color: #0a0a0a;
    color: white;
  }

  .tag:not(body).is-light {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }

  .tag:not(body).is-dark {
    background-color: #363636;
    color: #fff;
  }

  .tag:not(body).is-primary {
    background-color: #00d1b2;
    color: #fff;
  }

  .tag:not(body).is-primary.is-light {
    background-color: #ebfffc;
    color: #00947e;
  }

  .tag:not(body).is-link {
    background-color: #485fc7;
    color: #fff;
  }

  .tag:not(body).is-link.is-light {
    background-color: #eff1fa;
    color: #3850b7;
  }

  .tag:not(body).is-info {
    background-color: #3e8ed0;
    color: #fff;
  }

  .tag:not(body).is-info.is-light {
    background-color: #eff5fb;
    color: #296fa8;
  }

  .tag:not(body).is-success {
    background-color: #48c78e;
    color: #fff;
  }

  .tag:not(body).is-success.is-light {
    background-color: #effaf5;
    color: #257953;
  }

  .tag:not(body).is-warning {
    background-color: #ffe08a;
    color: rgba(0, 0, 0, 0.7);
  }

  .tag:not(body).is-warning.is-light {
    background-color: #fffaeb;
    color: #946c00;
  }

  .tag:not(body).is-danger {
    background-color: #f14668;
    color: #fff;
  }

  .tag:not(body).is-danger.is-light {
    background-color: #feecf0;
    color: #cc0f35;
  }

  .tag:not(body).is-normal {
    font-size: 0.75rem;
  }

  .tag:not(body).is-medium {
    font-size: 1rem;
  }

  .tag:not(body).is-large {
    font-size: 1.25rem;
  }

  .tag:not(body) .icon:first-child:not(:last-child) {
    margin-left: -0.375em;
    margin-right: 0.1875em;
  }

  .tag:not(body) .icon:last-child:not(:first-child) {
    margin-left: 0.1875em;
    margin-right: -0.375em;
  }

  .tag:not(body) .icon:first-child:last-child {
    margin-left: -0.375em;
    margin-right: -0.375em;
  }

  .tag:not(body).is-delete {
    margin-left: 1px;
    padding: 0;
    position: relative;
    width: 2em;
  }

  .tag:not(body).is-delete::before,
  .tag:not(body).is-delete::after {
    background-color: currentColor;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform-origin: center center;
  }

  .tag:not(body).is-delete::before {
    height: 1px;
    width: 50%;
  }

  .tag:not(body).is-delete::after {
    height: 50%;
    width: 1px;
  }

  .tag:not(body).is-delete:hover,
  .tag:not(body).is-delete:focus {
    background-color: #e8e8e8;
  }

  .tag:not(body).is-delete:active {
    background-color: #dbdbdb;
  }

  .tag:not(body).is-rounded {
    border-radius: 9999px;
  }

  a.tag:hover {
    text-decoration: underline;
  }

  .title,
  .subtitle {
    word-break: break-word;
  }

  .title em,
  .title span,
  .subtitle em,
  .subtitle span {
    font-weight: inherit;
  }

  .title sub,
  .subtitle sub {
    font-size: 0.75em;
  }

  .title sup,
  .subtitle sup {
    font-size: 0.75em;
  }

  .title .tag,
  .subtitle .tag {
    vertical-align: middle;
  }

  .title {
    color: #363636;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.125;
  }

  .title strong {
    color: inherit;
    font-weight: inherit;
  }

  .title:not(.is-spaced) + .subtitle {
    margin-top: -1.25rem;
  }

  .title.is-1 {
    font-size: 3rem;
  }

  .title.is-2 {
    font-size: 2.5rem;
  }

  .title.is-3 {
    font-size: 2rem;
  }

  .title.is-4 {
    font-size: 1.5rem;
  }

  .title.is-5 {
    font-size: 1.25rem;
  }

  .title.is-6 {
    font-size: 1rem;
  }

  .title.is-7 {
    font-size: 0.75rem;
  }

  .subtitle {
    color: #4a4a4a;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.25;
  }

  .subtitle strong {
    color: #363636;
    font-weight: 600;
  }

  .subtitle:not(.is-spaced) + .title {
    margin-top: -1.25rem;
  }

  .subtitle.is-1 {
    font-size: 3rem;
  }

  .subtitle.is-2 {
    font-size: 2.5rem;
  }

  .subtitle.is-3 {
    font-size: 2rem;
  }

  .subtitle.is-4 {
    font-size: 1.5rem;
  }

  .subtitle.is-5 {
    font-size: 1.25rem;
  }

  .subtitle.is-6 {
    font-size: 1rem;
  }

  .subtitle.is-7 {
    font-size: 0.75rem;
  }

  .heading {
    display: block;
    font-size: 11px;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  .number {
    align-items: center;
    background-color: whitesmoke;
    border-radius: 9999px;
    display: inline-flex;
    font-size: 1.25rem;
    height: 2em;
    justify-content: center;
    margin-right: 1.5rem;
    min-width: 2.5em;
    padding: 0.25rem 0.5rem;
    text-align: center;
    vertical-align: top;
  }

  /* Bulma Form */
  .input,
  .textarea,
  .select select {
    background-color: white;
    border-color: #dbdbdb;
    border-radius: 4px;
    color: #363636;
  }

  .input::-moz-placeholder,
  .textarea::-moz-placeholder,
  .select select::-moz-placeholder {
    color: rgba(54, 54, 54, 0.3);
  }

  .input::-webkit-input-placeholder,
  .textarea::-webkit-input-placeholder,
  .select select::-webkit-input-placeholder {
    color: rgba(54, 54, 54, 0.3);
  }

  .input:-moz-placeholder,
  .textarea:-moz-placeholder,
  .select select:-moz-placeholder {
    color: rgba(54, 54, 54, 0.3);
  }

  .input:-ms-input-placeholder,
  .textarea:-ms-input-placeholder,
  .select select:-ms-input-placeholder {
    color: rgba(54, 54, 54, 0.3);
  }

  .input:hover,
  .textarea:hover,
  .select select:hover,
  .is-hovered.input,
  .is-hovered.textarea,
  .select select.is-hovered {
    border-color: #b5b5b5;
  }

  .input:focus,
  .textarea:focus,
  .select select:focus,
  .is-focused.input,
  .is-focused.textarea,
  .select select.is-focused,
  .input:active,
  .textarea:active,
  .select select:active,
  .is-active.input,
  .is-active.textarea,
  .select select.is-active {
    border-color: #485fc7;
    box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
  }

  .input[disabled],
  .textarea[disabled],
  .select select[disabled],
  fieldset[disabled] .input,
  fieldset[disabled] .textarea,
  fieldset[disabled] .select select,
  .select fieldset[disabled] select {
    background-color: whitesmoke;
    border-color: whitesmoke;
    box-shadow: none;
    color: #7a7a7a;
  }

  .input[disabled]::-moz-placeholder,
  .textarea[disabled]::-moz-placeholder,
  .select select[disabled]::-moz-placeholder,
  fieldset[disabled] .input::-moz-placeholder,
  fieldset[disabled] .textarea::-moz-placeholder,
  fieldset[disabled] .select select::-moz-placeholder,
  .select fieldset[disabled] select::-moz-placeholder {
    color: rgba(122, 122, 122, 0.3);
  }

  .input[disabled]::-webkit-input-placeholder,
  .textarea[disabled]::-webkit-input-placeholder,
  .select select[disabled]::-webkit-input-placeholder,
  fieldset[disabled] .input::-webkit-input-placeholder,
  fieldset[disabled] .textarea::-webkit-input-placeholder,
  fieldset[disabled] .select select::-webkit-input-placeholder,
  .select fieldset[disabled] select::-webkit-input-placeholder {
    color: rgba(122, 122, 122, 0.3);
  }

  .input[disabled]:-moz-placeholder,
  .textarea[disabled]:-moz-placeholder,
  .select select[disabled]:-moz-placeholder,
  fieldset[disabled] .input:-moz-placeholder,
  fieldset[disabled] .textarea:-moz-placeholder,
  fieldset[disabled] .select select:-moz-placeholder,
  .select fieldset[disabled] select:-moz-placeholder {
    color: rgba(122, 122, 122, 0.3);
  }

  .input[disabled]:-ms-input-placeholder,
  .textarea[disabled]:-ms-input-placeholder,
  .select select[disabled]:-ms-input-placeholder,
  fieldset[disabled] .input:-ms-input-placeholder,
  fieldset[disabled] .textarea:-ms-input-placeholder,
  fieldset[disabled] .select select:-ms-input-placeholder,
  .select fieldset[disabled] select:-ms-input-placeholder {
    color: rgba(122, 122, 122, 0.3);
  }

  .input,
  .textarea {
    box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
    max-width: 100%;
    width: 100%;
  }

  .input[readonly],
  .textarea[readonly] {
    box-shadow: none;
  }

  .is-white.input,
  .is-white.textarea {
    border-color: white;
  }

  .is-white.input:focus,
  .is-white.textarea:focus,
  .is-white.is-focused.input,
  .is-white.is-focused.textarea,
  .is-white.input:active,
  .is-white.textarea:active,
  .is-white.is-active.input,
  .is-white.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
  }

  .is-black.input,
  .is-black.textarea {
    border-color: #0a0a0a;
  }

  .is-black.input:focus,
  .is-black.textarea:focus,
  .is-black.is-focused.input,
  .is-black.is-focused.textarea,
  .is-black.input:active,
  .is-black.textarea:active,
  .is-black.is-active.input,
  .is-black.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
  }

  .is-light.input,
  .is-light.textarea {
    border-color: whitesmoke;
  }

  .is-light.input:focus,
  .is-light.textarea:focus,
  .is-light.is-focused.input,
  .is-light.is-focused.textarea,
  .is-light.input:active,
  .is-light.textarea:active,
  .is-light.is-active.input,
  .is-light.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
  }

  .is-dark.input,
  .is-dark.textarea {
    border-color: #363636;
  }

  .is-dark.input:focus,
  .is-dark.textarea:focus,
  .is-dark.is-focused.input,
  .is-dark.is-focused.textarea,
  .is-dark.input:active,
  .is-dark.textarea:active,
  .is-dark.is-active.input,
  .is-dark.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
  }

  .is-primary.input,
  .is-primary.textarea {
    border-color: #00d1b2;
  }

  .is-primary.input:focus,
  .is-primary.textarea:focus,
  .is-primary.is-focused.input,
  .is-primary.is-focused.textarea,
  .is-primary.input:active,
  .is-primary.textarea:active,
  .is-primary.is-active.input,
  .is-primary.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
  }

  .is-link.input,
  .is-link.textarea {
    border-color: #485fc7;
  }

  .is-link.input:focus,
  .is-link.textarea:focus,
  .is-link.is-focused.input,
  .is-link.is-focused.textarea,
  .is-link.input:active,
  .is-link.textarea:active,
  .is-link.is-active.input,
  .is-link.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
  }

  .is-info.input,
  .is-info.textarea {
    border-color: #3e8ed0;
  }

  .is-info.input:focus,
  .is-info.textarea:focus,
  .is-info.is-focused.input,
  .is-info.is-focused.textarea,
  .is-info.input:active,
  .is-info.textarea:active,
  .is-info.is-active.input,
  .is-info.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);
  }

  .is-success.input,
  .is-success.textarea {
    border-color: #48c78e;
  }

  .is-success.input:focus,
  .is-success.textarea:focus,
  .is-success.is-focused.input,
  .is-success.is-focused.textarea,
  .is-success.input:active,
  .is-success.textarea:active,
  .is-success.is-active.input,
  .is-success.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);
  }

  .is-warning.input,
  .is-warning.textarea {
    border-color: #ffe08a;
  }

  .is-warning.input:focus,
  .is-warning.textarea:focus,
  .is-warning.is-focused.input,
  .is-warning.is-focused.textarea,
  .is-warning.input:active,
  .is-warning.textarea:active,
  .is-warning.is-active.input,
  .is-warning.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);
  }

  .is-danger.input,
  .is-danger.textarea {
    border-color: #f14668;
  }

  .is-danger.input:focus,
  .is-danger.textarea:focus,
  .is-danger.is-focused.input,
  .is-danger.is-focused.textarea,
  .is-danger.input:active,
  .is-danger.textarea:active,
  .is-danger.is-active.input,
  .is-danger.is-active.textarea {
    box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
  }

  .is-small.input,
  .is-small.textarea {
    border-radius: 2px;
    font-size: 0.75rem;
  }

  .is-medium.input,
  .is-medium.textarea {
    font-size: 1.25rem;
  }

  .is-large.input,
  .is-large.textarea {
    font-size: 1.5rem;
  }

  .is-fullwidth.input,
  .is-fullwidth.textarea {
    display: block;
    width: 100%;
  }

  .is-inline.input,
  .is-inline.textarea {
    display: inline;
    width: auto;
  }

  .input.is-rounded {
    border-radius: 9999px;
    padding-left: calc(calc(0.75em - 1px) + 0.375em);
    padding-right: calc(calc(0.75em - 1px) + 0.375em);
  }

  .input.is-static {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    padding-left: 0;
    padding-right: 0;
  }

  .textarea {
    display: block;
    max-width: 100%;
    min-width: 100%;
    padding: calc(0.75em - 1px);
    resize: vertical;
  }

  .textarea:not([rows]) {
    max-height: 40em;
    min-height: 8em;
  }

  .textarea[rows] {
    height: initial;
  }

  .textarea.has-fixed-size {
    resize: none;
  }

  .checkbox,
  .radio {
    cursor: pointer;
    display: inline-block;
    line-height: 1.25;
    position: relative;
  }

  .checkbox input,
  .radio input {
    cursor: pointer;
  }

  .checkbox:hover,
  .radio:hover {
    color: #363636;
  }

  .checkbox[disabled],
  .radio[disabled],
  fieldset[disabled] .checkbox,
  fieldset[disabled] .radio,
  .checkbox input[disabled],
  .radio input[disabled] {
    color: #7a7a7a;
    cursor: not-allowed;
  }

  .radio + .radio {
    margin-left: 0.5em;
  }

  .select {
    display: inline-block;
    max-width: 100%;
    position: relative;
    vertical-align: top;
  }

  .select:not(.is-multiple) {
    height: 2.5em;
  }

  .select:not(.is-multiple):not(.is-loading)::after {
    border-color: #485fc7;
    right: 1.125em;
    z-index: 4;
  }

  .select.is-rounded select {
    border-radius: 9999px;
    padding-left: 1em;
  }

  .select select {
    cursor: pointer;
    display: block;
    font-size: 1em;
    max-width: 100%;
    outline: none;
  }

  .select select::-ms-expand {
    display: none;
  }

  .select select[disabled]:hover,
  fieldset[disabled] .select select:hover {
    border-color: whitesmoke;
  }

  .select select:not([multiple]) {
    padding-right: 2.5em;
  }

  .select select[multiple] {
    height: auto;
    padding: 0;
  }

  .select select[multiple] option {
    padding: 0.5em 1em;
  }

  .select:not(.is-multiple):not(.is-loading):hover::after {
    border-color: #363636;
  }

  .select.is-white:not(:hover)::after {
    border-color: white;
  }

  .select.is-white select {
    border-color: white;
  }

  .select.is-white select:hover,
  .select.is-white select.is-hovered {
    border-color: #f2f2f2;
  }

  .select.is-white select:focus,
  .select.is-white select.is-focused,
  .select.is-white select:active,
  .select.is-white select.is-active {
    box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
  }

  .select.is-black:not(:hover)::after {
    border-color: #0a0a0a;
  }

  .select.is-black select {
    border-color: #0a0a0a;
  }

  .select.is-black select:hover,
  .select.is-black select.is-hovered {
    border-color: black;
  }

  .select.is-black select:focus,
  .select.is-black select.is-focused,
  .select.is-black select:active,
  .select.is-black select.is-active {
    box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
  }

  .select.is-light:not(:hover)::after {
    border-color: whitesmoke;
  }

  .select.is-light select {
    border-color: whitesmoke;
  }

  .select.is-light select:hover,
  .select.is-light select.is-hovered {
    border-color: #e8e8e8;
  }

  .select.is-light select:focus,
  .select.is-light select.is-focused,
  .select.is-light select:active,
  .select.is-light select.is-active {
    box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
  }

  .select.is-dark:not(:hover)::after {
    border-color: #363636;
  }

  .select.is-dark select {
    border-color: #363636;
  }

  .select.is-dark select:hover,
  .select.is-dark select.is-hovered {
    border-color: #292929;
  }

  .select.is-dark select:focus,
  .select.is-dark select.is-focused,
  .select.is-dark select:active,
  .select.is-dark select.is-active {
    box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
  }

  .select.is-primary:not(:hover)::after {
    border-color: #00d1b2;
  }

  .select.is-primary select {
    border-color: #00d1b2;
  }

  .select.is-primary select:hover,
  .select.is-primary select.is-hovered {
    border-color: #00b89c;
  }

  .select.is-primary select:focus,
  .select.is-primary select.is-focused,
  .select.is-primary select:active,
  .select.is-primary select.is-active {
    box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
  }

  .select.is-link:not(:hover)::after {
    border-color: #485fc7;
  }

  .select.is-link select {
    border-color: #485fc7;
  }

  .select.is-link select:hover,
  .select.is-link select.is-hovered {
    border-color: #3a51bb;
  }

  .select.is-link select:focus,
  .select.is-link select.is-focused,
  .select.is-link select:active,
  .select.is-link select.is-active {
    box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
  }

  .select.is-info:not(:hover)::after {
    border-color: #3e8ed0;
  }

  .select.is-info select {
    border-color: #3e8ed0;
  }

  .select.is-info select:hover,
  .select.is-info select.is-hovered {
    border-color: #3082c5;
  }

  .select.is-info select:focus,
  .select.is-info select.is-focused,
  .select.is-info select:active,
  .select.is-info select.is-active {
    box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);
  }

  .select.is-success:not(:hover)::after {
    border-color: #48c78e;
  }

  .select.is-success select {
    border-color: #48c78e;
  }

  .select.is-success select:hover,
  .select.is-success select.is-hovered {
    border-color: #3abb81;
  }

  .select.is-success select:focus,
  .select.is-success select.is-focused,
  .select.is-success select:active,
  .select.is-success select.is-active {
    box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);
  }

  .select.is-warning:not(:hover)::after {
    border-color: #ffe08a;
  }

  .select.is-warning select {
    border-color: #ffe08a;
  }

  .select.is-warning select:hover,
  .select.is-warning select.is-hovered {
    border-color: #ffd970;
  }

  .select.is-warning select:focus,
  .select.is-warning select.is-focused,
  .select.is-warning select:active,
  .select.is-warning select.is-active {
    box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);
  }

  .select.is-danger:not(:hover)::after {
    border-color: #f14668;
  }

  .select.is-danger select {
    border-color: #f14668;
  }

  .select.is-danger select:hover,
  .select.is-danger select.is-hovered {
    border-color: #ef2e55;
  }

  .select.is-danger select:focus,
  .select.is-danger select.is-focused,
  .select.is-danger select:active,
  .select.is-danger select.is-active {
    box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
  }

  .select.is-small {
    border-radius: 2px;
    font-size: 0.75rem;
  }

  .select.is-medium {
    font-size: 1.25rem;
  }

  .select.is-large {
    font-size: 1.5rem;
  }

  .select.is-disabled::after {
    border-color: #7a7a7a !important;
    opacity: 0.5;
  }

  .select.is-fullwidth {
    width: 100%;
  }

  .select.is-fullwidth select {
    width: 100%;
  }

  .select.is-loading::after {
    margin-top: 0;
    position: absolute;
    right: 0.625em;
    top: 0.625em;
    transform: none;
  }

  .select.is-loading.is-small:after {
    font-size: 0.75rem;
  }

  .select.is-loading.is-medium:after {
    font-size: 1.25rem;
  }

  .select.is-loading.is-large:after {
    font-size: 1.5rem;
  }

  .file {
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    position: relative;
  }

  .file.is-white .file-cta {
    background-color: white;
    border-color: transparent;
    color: #0a0a0a;
  }

  .file.is-white:hover .file-cta,
  .file.is-white.is-hovered .file-cta {
    background-color: #f9f9f9;
    border-color: transparent;
    color: #0a0a0a;
  }

  .file.is-white:focus .file-cta,
  .file.is-white.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);
    color: #0a0a0a;
  }

  .file.is-white:active .file-cta,
  .file.is-white.is-active .file-cta {
    background-color: #f2f2f2;
    border-color: transparent;
    color: #0a0a0a;
  }

  .file.is-black .file-cta {
    background-color: #0a0a0a;
    border-color: transparent;
    color: white;
  }

  .file.is-black:hover .file-cta,
  .file.is-black.is-hovered .file-cta {
    background-color: #040404;
    border-color: transparent;
    color: white;
  }

  .file.is-black:focus .file-cta,
  .file.is-black.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);
    color: white;
  }

  .file.is-black:active .file-cta,
  .file.is-black.is-active .file-cta {
    background-color: black;
    border-color: transparent;
    color: white;
  }

  .file.is-light .file-cta {
    background-color: whitesmoke;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .file.is-light:hover .file-cta,
  .file.is-light.is-hovered .file-cta {
    background-color: #eeeeee;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .file.is-light:focus .file-cta,
  .file.is-light.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);
    color: rgba(0, 0, 0, 0.7);
  }

  .file.is-light:active .file-cta,
  .file.is-light.is-active .file-cta {
    background-color: #e8e8e8;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .file.is-dark .file-cta {
    background-color: #363636;
    border-color: transparent;
    color: #fff;
  }

  .file.is-dark:hover .file-cta,
  .file.is-dark.is-hovered .file-cta {
    background-color: #2f2f2f;
    border-color: transparent;
    color: #fff;
  }

  .file.is-dark:focus .file-cta,
  .file.is-dark.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);
    color: #fff;
  }

  .file.is-dark:active .file-cta,
  .file.is-dark.is-active .file-cta {
    background-color: #292929;
    border-color: transparent;
    color: #fff;
  }

  .file.is-primary .file-cta {
    background-color: #00d1b2;
    border-color: transparent;
    color: #fff;
  }

  .file.is-primary:hover .file-cta,
  .file.is-primary.is-hovered .file-cta {
    background-color: #00c4a7;
    border-color: transparent;
    color: #fff;
  }

  .file.is-primary:focus .file-cta,
  .file.is-primary.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
    color: #fff;
  }

  .file.is-primary:active .file-cta,
  .file.is-primary.is-active .file-cta {
    background-color: #00b89c;
    border-color: transparent;
    color: #fff;
  }

  .file.is-link .file-cta {
    background-color: #485fc7;
    border-color: transparent;
    color: #fff;
  }

  .file.is-link:hover .file-cta,
  .file.is-link.is-hovered .file-cta {
    background-color: #3e56c4;
    border-color: transparent;
    color: #fff;
  }

  .file.is-link:focus .file-cta,
  .file.is-link.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(72, 95, 199, 0.25);
    color: #fff;
  }

  .file.is-link:active .file-cta,
  .file.is-link.is-active .file-cta {
    background-color: #3a51bb;
    border-color: transparent;
    color: #fff;
  }

  .file.is-info .file-cta {
    background-color: #3e8ed0;
    border-color: transparent;
    color: #fff;
  }

  .file.is-info:hover .file-cta,
  .file.is-info.is-hovered .file-cta {
    background-color: #3488ce;
    border-color: transparent;
    color: #fff;
  }

  .file.is-info:focus .file-cta,
  .file.is-info.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(62, 142, 208, 0.25);
    color: #fff;
  }

  .file.is-info:active .file-cta,
  .file.is-info.is-active .file-cta {
    background-color: #3082c5;
    border-color: transparent;
    color: #fff;
  }

  .file.is-success .file-cta {
    background-color: #48c78e;
    border-color: transparent;
    color: #fff;
  }

  .file.is-success:hover .file-cta,
  .file.is-success.is-hovered .file-cta {
    background-color: #3ec487;
    border-color: transparent;
    color: #fff;
  }

  .file.is-success:focus .file-cta,
  .file.is-success.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.25);
    color: #fff;
  }

  .file.is-success:active .file-cta,
  .file.is-success.is-active .file-cta {
    background-color: #3abb81;
    border-color: transparent;
    color: #fff;
  }

  .file.is-warning .file-cta {
    background-color: #ffe08a;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .file.is-warning:hover .file-cta,
  .file.is-warning.is-hovered .file-cta {
    background-color: #ffdc7d;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .file.is-warning:focus .file-cta,
  .file.is-warning.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.25);
    color: rgba(0, 0, 0, 0.7);
  }

  .file.is-warning:active .file-cta,
  .file.is-warning.is-active .file-cta {
    background-color: #ffd970;
    border-color: transparent;
    color: rgba(0, 0, 0, 0.7);
  }

  .file.is-danger .file-cta {
    background-color: #f14668;
    border-color: transparent;
    color: #fff;
  }

  .file.is-danger:hover .file-cta,
  .file.is-danger.is-hovered .file-cta {
    background-color: #f03a5f;
    border-color: transparent;
    color: #fff;
  }

  .file.is-danger:focus .file-cta,
  .file.is-danger.is-focused .file-cta {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);
    color: #fff;
  }

  .file.is-danger:active .file-cta,
  .file.is-danger.is-active .file-cta {
    background-color: #ef2e55;
    border-color: transparent;
    color: #fff;
  }

  .file.is-small {
    font-size: 0.75rem;
  }

  .file.is-normal {
    font-size: 1rem;
  }

  .file.is-medium {
    font-size: 1.25rem;
  }

  .file.is-medium .file-icon .fa {
    font-size: 21px;
  }

  .file.is-large {
    font-size: 1.5rem;
  }

  .file.is-large .file-icon .fa {
    font-size: 28px;
  }

  .file.has-name .file-cta {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .file.has-name .file-name {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .file.has-name.is-empty .file-cta {
    border-radius: 4px;
  }

  .file.has-name.is-empty .file-name {
    display: none;
  }

  .file.is-boxed .file-label {
    flex-direction: column;
  }

  .file.is-boxed .file-cta {
    flex-direction: column;
    height: auto;
    padding: 1em 3em;
  }

  .file.is-boxed .file-name {
    border-width: 0 1px 1px;
  }

  .file.is-boxed .file-icon {
    height: 1.5em;
    width: 1.5em;
  }

  .file.is-boxed .file-icon .fa {
    font-size: 21px;
  }

  .file.is-boxed.is-small .file-icon .fa {
    font-size: 14px;
  }

  .file.is-boxed.is-medium .file-icon .fa {
    font-size: 28px;
  }

  .file.is-boxed.is-large .file-icon .fa {
    font-size: 35px;
  }

  .file.is-boxed.has-name .file-cta {
    border-radius: 4px 4px 0 0;
  }

  .file.is-boxed.has-name .file-name {
    border-radius: 0 0 4px 4px;
    border-width: 0 1px 1px;
  }

  .file.is-centered {
    justify-content: center;
  }

  .file.is-fullwidth .file-label {
    width: 100%;
  }

  .file.is-fullwidth .file-name {
    flex-grow: 1;
    max-width: none;
  }

  .file.is-right {
    justify-content: flex-end;
  }

  .file.is-right .file-cta {
    border-radius: 0 4px 4px 0;
  }

  .file.is-right .file-name {
    border-radius: 4px 0 0 4px;
    border-width: 1px 0 1px 1px;
    order: -1;
  }

  .file-label {
    align-items: stretch;
    display: flex;
    cursor: pointer;
    justify-content: flex-start;
    overflow: hidden;
    position: relative;
  }

  .file-label:hover .file-cta {
    background-color: #eeeeee;
    color: #363636;
  }

  .file-label:hover .file-name {
    border-color: #d5d5d5;
  }

  .file-label:active .file-cta {
    background-color: #e8e8e8;
    color: #363636;
  }

  .file-label:active .file-name {
    border-color: #cfcfcf;
  }

  .file-input {
    height: 100%;
    left: 0;
    opacity: 0;
    outline: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .file-cta,
  .file-name {
    border-color: #dbdbdb;
    border-radius: 4px;
    font-size: 1em;
    padding-left: 1em;
    padding-right: 1em;
    white-space: nowrap;
  }

  .file-cta {
    background-color: whitesmoke;
    color: #4a4a4a;
  }

  .file-name {
    border-color: #dbdbdb;
    border-style: solid;
    border-width: 1px 1px 1px 0;
    display: block;
    max-width: 16em;
    overflow: hidden;
    text-align: inherit;
    text-overflow: ellipsis;
  }

  .file-icon {
    align-items: center;
    display: flex;
    height: 1em;
    justify-content: center;
    margin-right: 0.5em;
    width: 1em;
  }

  .file-icon .fa {
    font-size: 14px;
  }

  .label {
    color: #363636;
    display: block;
    font-size: 1rem;
    font-weight: 700;
  }

  .label:not(:last-child) {
    margin-bottom: 0.5em;
  }

  .label.is-small {
    font-size: 0.75rem;
  }

  .label.is-medium {
    font-size: 1.25rem;
  }

  .label.is-large {
    font-size: 1.5rem;
  }

  .help {
    display: block;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  .help.is-white {
    color: white;
  }

  .help.is-black {
    color: #0a0a0a;
  }

  .help.is-light {
    color: whitesmoke;
  }

  .help.is-dark {
    color: #363636;
  }

  .help.is-primary {
    color: #00d1b2;
  }

  .help.is-link {
    color: #485fc7;
  }

  .help.is-info {
    color: #3e8ed0;
  }

  .help.is-success {
    color: #48c78e;
  }

  .help.is-warning {
    color: #ffe08a;
  }

  .help.is-danger {
    color: #f14668;
  }

  .field:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  .field.has-addons {
    display: flex;
    justify-content: flex-start;
  }

  .field.has-addons .control:not(:last-child) {
    margin-right: -1px;
  }

  .field.has-addons .control:not(:first-child):not(:last-child) .button,
  .field.has-addons .control:not(:first-child):not(:last-child) .input,
  .field.has-addons .control:not(:first-child):not(:last-child) .select select {
    border-radius: 0;
  }

  .field.has-addons .control:first-child:not(:only-child) .button,
  .field.has-addons .control:first-child:not(:only-child) .input,
  .field.has-addons .control:first-child:not(:only-child) .select select {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .field.has-addons .control:last-child:not(:only-child) .button,
  .field.has-addons .control:last-child:not(:only-child) .input,
  .field.has-addons .control:last-child:not(:only-child) .select select {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .field.has-addons .control .button:not([disabled]):hover,
  .field.has-addons .control .button:not([disabled]).is-hovered,
  .field.has-addons .control .input:not([disabled]):hover,
  .field.has-addons .control .input:not([disabled]).is-hovered,
  .field.has-addons .control .select select:not([disabled]):hover,
  .field.has-addons .control .select select:not([disabled]).is-hovered {
    z-index: 2;
  }

  .field.has-addons .control .button:not([disabled]):focus,
  .field.has-addons .control .button:not([disabled]).is-focused,
  .field.has-addons .control .button:not([disabled]):active,
  .field.has-addons .control .button:not([disabled]).is-active,
  .field.has-addons .control .input:not([disabled]):focus,
  .field.has-addons .control .input:not([disabled]).is-focused,
  .field.has-addons .control .input:not([disabled]):active,
  .field.has-addons .control .input:not([disabled]).is-active,
  .field.has-addons .control .select select:not([disabled]):focus,
  .field.has-addons .control .select select:not([disabled]).is-focused,
  .field.has-addons .control .select select:not([disabled]):active,
  .field.has-addons .control .select select:not([disabled]).is-active {
    z-index: 3;
  }

  .field.has-addons .control .button:not([disabled]):focus:hover,
  .field.has-addons .control .button:not([disabled]).is-focused:hover,
  .field.has-addons .control .button:not([disabled]):active:hover,
  .field.has-addons .control .button:not([disabled]).is-active:hover,
  .field.has-addons .control .input:not([disabled]):focus:hover,
  .field.has-addons .control .input:not([disabled]).is-focused:hover,
  .field.has-addons .control .input:not([disabled]):active:hover,
  .field.has-addons .control .input:not([disabled]).is-active:hover,
  .field.has-addons .control .select select:not([disabled]):focus:hover,
  .field.has-addons .control .select select:not([disabled]).is-focused:hover,
  .field.has-addons .control .select select:not([disabled]):active:hover,
  .field.has-addons .control .select select:not([disabled]).is-active:hover {
    z-index: 4;
  }

  .field.has-addons .control.is-expanded {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .field.has-addons.has-addons-centered {
    justify-content: center;
  }

  .field.has-addons.has-addons-right {
    justify-content: flex-end;
  }

  .field.has-addons.has-addons-fullwidth .control {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .field.is-grouped {
    display: flex;
    justify-content: flex-start;
  }

  .field.is-grouped > .control {
    flex-shrink: 0;
  }

  .field.is-grouped > .control:not(:last-child) {
    margin-bottom: 0;
    margin-right: 0.75rem;
  }

  .field.is-grouped > .control.is-expanded {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .field.is-grouped.is-grouped-centered {
    justify-content: center;
  }

  .field.is-grouped.is-grouped-right {
    justify-content: flex-end;
  }

  .field.is-grouped.is-grouped-multiline {
    flex-wrap: wrap;
  }

  .field.is-grouped.is-grouped-multiline > .control:last-child,
  .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  .field.is-grouped.is-grouped-multiline:last-child {
    margin-bottom: -0.75rem;
  }

  .field.is-grouped.is-grouped-multiline:not(:last-child) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 769px), print {
    .field.is-horizontal {
      display: flex;
    }
  }

  .field-label .label {
    font-size: inherit;
  }

  @media screen and (max-width: 768px) {
    .field-label {
      margin-bottom: 0.5rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .field-label {
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 0;
      margin-right: 1.5rem;
      text-align: right;
    }
    .field-label.is-small {
      font-size: 0.75rem;
      padding-top: 0.375em;
    }
    .field-label.is-normal {
      padding-top: 0.375em;
    }
    .field-label.is-medium {
      font-size: 1.25rem;
      padding-top: 0.375em;
    }
    .field-label.is-large {
      font-size: 1.5rem;
      padding-top: 0.375em;
    }
  }

  .field-body .field .field {
    margin-bottom: 0;
  }

  @media screen and (min-width: 769px), print {
    .field-body {
      display: flex;
      flex-basis: 0;
      flex-grow: 5;
      flex-shrink: 1;
    }
    .field-body .field {
      margin-bottom: 0;
    }
    .field-body > .field {
      flex-shrink: 1;
    }
    .field-body > .field:not(.is-narrow) {
      flex-grow: 1;
    }
    .field-body > .field:not(:last-child) {
      margin-right: 0.75rem;
    }
  }

  .control {
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: inherit;
  }

  .control.has-icons-left .input:focus ~ .icon,
  .control.has-icons-left .select:focus ~ .icon,
  .control.has-icons-right .input:focus ~ .icon,
  .control.has-icons-right .select:focus ~ .icon {
    color: #4a4a4a;
  }

  .control.has-icons-left .input.is-small ~ .icon,
  .control.has-icons-left .select.is-small ~ .icon,
  .control.has-icons-right .input.is-small ~ .icon,
  .control.has-icons-right .select.is-small ~ .icon {
    font-size: 0.75rem;
  }

  .control.has-icons-left .input.is-medium ~ .icon,
  .control.has-icons-left .select.is-medium ~ .icon,
  .control.has-icons-right .input.is-medium ~ .icon,
  .control.has-icons-right .select.is-medium ~ .icon {
    font-size: 1.25rem;
  }

  .control.has-icons-left .input.is-large ~ .icon,
  .control.has-icons-left .select.is-large ~ .icon,
  .control.has-icons-right .input.is-large ~ .icon,
  .control.has-icons-right .select.is-large ~ .icon {
    font-size: 1.5rem;
  }

  .control.has-icons-left .icon,
  .control.has-icons-right .icon {
    color: #dbdbdb;
    height: 2.5em;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 2.5em;
    z-index: 4;
  }

  .control.has-icons-left .input,
  .control.has-icons-left .select select {
    padding-left: 2.5em;
  }

  .control.has-icons-left .icon.is-left {
    left: 0;
  }

  .control.has-icons-right .input,
  .control.has-icons-right .select select {
    padding-right: 2.5em;
  }

  .control.has-icons-right .icon.is-right {
    right: 0;
  }

  .control.is-loading::after {
    position: absolute !important;
    right: 0.625em;
    top: 0.625em;
    z-index: 4;
  }

  .control.is-loading.is-small:after {
    font-size: 0.75rem;
  }

  .control.is-loading.is-medium:after {
    font-size: 1.25rem;
  }

  .control.is-loading.is-large:after {
    font-size: 1.5rem;
  }

  /* Bulma Components */
  .breadcrumb {
    font-size: 1rem;
    white-space: nowrap;
  }

  .breadcrumb a {
    align-items: center;
    color: #485fc7;
    display: flex;
    justify-content: center;
    padding: 0 0.75em;
  }

  .breadcrumb a:hover {
    color: #363636;
  }

  .breadcrumb li {
    align-items: center;
    display: flex;
  }

  .breadcrumb li:first-child a {
    padding-left: 0;
  }

  .breadcrumb li.is-active a {
    color: #363636;
    cursor: default;
    pointer-events: none;
  }

  .breadcrumb li + li::before {
    color: #b5b5b5;
    content: "\\0002f";
  }

  .breadcrumb ul,
  .breadcrumb ol {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .breadcrumb .icon:first-child {
    margin-right: 0.5em;
  }

  .breadcrumb .icon:last-child {
    margin-left: 0.5em;
  }

  .breadcrumb.is-centered ol,
  .breadcrumb.is-centered ul {
    justify-content: center;
  }

  .breadcrumb.is-right ol,
  .breadcrumb.is-right ul {
    justify-content: flex-end;
  }

  .breadcrumb.is-small {
    font-size: 0.75rem;
  }

  .breadcrumb.is-medium {
    font-size: 1.25rem;
  }

  .breadcrumb.is-large {
    font-size: 1.5rem;
  }

  .breadcrumb.has-arrow-separator li + li::before {
    content: "\\02192";
  }

  .breadcrumb.has-bullet-separator li + li::before {
    content: "\\02022";
  }

  .breadcrumb.has-dot-separator li + li::before {
    content: "\\000b7";
  }

  .breadcrumb.has-succeeds-separator li + li::before {
    content: "\\0227B";
  }

  .card {
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0px 0 1px rgba(10, 10, 10, 0.02);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
  }

  .card-header:first-child,
  .card-content:first-child,
  .card-footer:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .card-header:last-child,
  .card-content:last-child,
  .card-footer:last-child {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .card-header {
    background-color: transparent;
    align-items: stretch;
    box-shadow: 0 0.125em 0.25em rgba(10, 10, 10, 0.1);
    display: flex;
  }

  .card-header-title {
    align-items: center;
    color: #363636;
    display: flex;
    flex-grow: 1;
    font-weight: 700;
    padding: 0.75rem 1rem;
  }

  .card-header-title.is-centered {
    justify-content: center;
  }

  .card-header-icon {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    color: currentColor;
    font-family: inherit;
    font-size: 1em;
    margin: 0;
    padding: 0;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0.75rem 1rem;
  }

  .card-image {
    display: block;
    position: relative;
  }

  .card-image:first-child img {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .card-image:last-child img {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .card-content {
    background-color: transparent;
    padding: 1.5rem;
  }

  .card-footer {
    background-color: transparent;
    border-top: 1px solid #ededed;
    align-items: stretch;
    display: flex;
  }

  .card-footer-item {
    align-items: center;
    display: flex;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    padding: 0.75rem;
  }

  .card-footer-item:not(:last-child) {
    border-right: 1px solid #ededed;
  }

  .card .media:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .dropdown {
    display: inline-flex;
    position: relative;
    vertical-align: top;
  }

  .dropdown.is-active .dropdown-menu,
  .dropdown.is-hoverable:hover .dropdown-menu {
    display: block;
  }

  .dropdown.is-right .dropdown-menu {
    left: auto;
    right: 0;
  }

  .dropdown.is-up .dropdown-menu {
    bottom: 100%;
    padding-bottom: 4px;
    padding-top: initial;
    top: auto;
  }

  .dropdown-menu {
    display: none;
    left: 0;
    min-width: 12rem;
    padding-top: 4px;
    position: absolute;
    top: 100%;
    z-index: 20;
  }

  .dropdown-content {
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0px 0 1px rgba(10, 10, 10, 0.02);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  .dropdown-item {
    color: #4a4a4a;
    display: block;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0.375rem 1rem;
    position: relative;
  }

  a.dropdown-item,
  button.dropdown-item {
    padding-right: 3rem;
    text-align: inherit;
    white-space: nowrap;
    width: 100%;
  }

  a.dropdown-item:hover,
  button.dropdown-item:hover {
    background-color: whitesmoke;
    color: #0a0a0a;
  }

  a.dropdown-item.is-active,
  button.dropdown-item.is-active {
    background-color: #485fc7;
    color: #fff;
  }

  .dropdown-divider {
    background-color: #ededed;
    border: none;
    display: block;
    height: 1px;
    margin: 0.5rem 0;
  }

  .level {
    align-items: center;
    justify-content: space-between;
  }

  .level code {
    border-radius: 4px;
  }

  .level img {
    display: inline-block;
    vertical-align: top;
  }

  .level.is-mobile {
    display: flex;
  }

  .level.is-mobile .level-left,
  .level.is-mobile .level-right {
    display: flex;
  }

  .level.is-mobile .level-left + .level-right {
    margin-top: 0;
  }

  .level.is-mobile .level-item:not(:last-child) {
    margin-bottom: 0;
    margin-right: 0.75rem;
  }

  .level.is-mobile .level-item:not(.is-narrow) {
    flex-grow: 1;
  }

  @media screen and (min-width: 769px), print {
    .level {
      display: flex;
    }
    .level > .level-item:not(.is-narrow) {
      flex-grow: 1;
    }
  }

  .level-item {
    align-items: center;
    display: flex;
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: center;
  }

  .level-item .title,
  .level-item .subtitle {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    .level-item:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }

  .level-left,
  .level-right {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .level-left .level-item.is-flexible,
  .level-right .level-item.is-flexible {
    flex-grow: 1;
  }

  @media screen and (min-width: 769px), print {
    .level-left .level-item:not(:last-child),
    .level-right .level-item:not(:last-child) {
      margin-right: 0.75rem;
    }
  }

  .level-left {
    align-items: center;
    justify-content: flex-start;
  }

  @media screen and (max-width: 768px) {
    .level-left + .level-right {
      margin-top: 1.5rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .level-left {
      display: flex;
    }
  }

  .level-right {
    align-items: center;
    justify-content: flex-end;
  }

  @media screen and (min-width: 769px), print {
    .level-right {
      display: flex;
    }
  }

  .media {
    align-items: flex-start;
    display: flex;
    text-align: inherit;
  }

  .media .content:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  .media .media {
    border-top: 1px solid rgba(219, 219, 219, 0.5);
    display: flex;
    padding-top: 0.75rem;
  }

  .media .media .content:not(:last-child),
  .media .media .control:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .media .media .media {
    padding-top: 0.5rem;
  }

  .media .media .media + .media {
    margin-top: 0.5rem;
  }

  .media + .media {
    border-top: 1px solid rgba(219, 219, 219, 0.5);
    margin-top: 1rem;
    padding-top: 1rem;
  }

  .media.is-large + .media {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
  }

  .media-left,
  .media-right {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .media-left {
    margin-right: 1rem;
  }

  .media-right {
    margin-left: 1rem;
  }

  .media-content {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: inherit;
  }

  @media screen and (max-width: 768px) {
    .media-content {
      overflow-x: auto;
    }
  }

  .menu {
    font-size: 1rem;
  }

  .menu.is-small {
    font-size: 0.75rem;
  }

  .menu.is-medium {
    font-size: 1.25rem;
  }

  .menu.is-large {
    font-size: 1.5rem;
  }

  .menu-list {
    line-height: 1.25;
  }

  .menu-list a {
    border-radius: 2px;
    color: #4a4a4a;
    display: block;
    padding: 0.5em 0.75em;
  }

  .menu-list a:hover {
    background-color: whitesmoke;
    color: #363636;
  }

  .menu-list a.is-active {
    background-color: #485fc7;
    color: #fff;
  }

  .menu-list li ul {
    border-left: 1px solid #dbdbdb;
    margin: 0.75em;
    padding-left: 0.75em;
  }

  .menu-label {
    color: #7a7a7a;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .menu-label:not(:first-child) {
    margin-top: 1em;
  }

  .menu-label:not(:last-child) {
    margin-bottom: 1em;
  }

  .message {
    background-color: whitesmoke;
    border-radius: 4px;
    font-size: 1rem;
  }

  .message strong {
    color: currentColor;
  }

  .message a:not(.button):not(.tag):not(.dropdown-item) {
    color: currentColor;
    text-decoration: underline;
  }

  .message.is-small {
    font-size: 0.75rem;
  }

  .message.is-medium {
    font-size: 1.25rem;
  }

  .message.is-large {
    font-size: 1.5rem;
  }

  .message.is-white {
    background-color: white;
  }

  .message.is-white .message-header {
    background-color: white;
    color: #0a0a0a;
  }

  .message.is-white .message-body {
    border-color: white;
  }

  .message.is-black {
    background-color: #fafafa;
  }

  .message.is-black .message-header {
    background-color: #0a0a0a;
    color: white;
  }

  .message.is-black .message-body {
    border-color: #0a0a0a;
  }

  .message.is-light {
    background-color: #fafafa;
  }

  .message.is-light .message-header {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }

  .message.is-light .message-body {
    border-color: whitesmoke;
  }

  .message.is-dark {
    background-color: #fafafa;
  }

  .message.is-dark .message-header {
    background-color: #363636;
    color: #fff;
  }

  .message.is-dark .message-body {
    border-color: #363636;
  }

  .message.is-primary {
    background-color: #ebfffc;
  }

  .message.is-primary .message-header {
    background-color: #00d1b2;
    color: #fff;
  }

  .message.is-primary .message-body {
    border-color: #00d1b2;
    color: #00947e;
  }

  .message.is-link {
    background-color: #eff1fa;
  }

  .message.is-link .message-header {
    background-color: #485fc7;
    color: #fff;
  }

  .message.is-link .message-body {
    border-color: #485fc7;
    color: #3850b7;
  }

  .message.is-info {
    background-color: #eff5fb;
  }

  .message.is-info .message-header {
    background-color: #3e8ed0;
    color: #fff;
  }

  .message.is-info .message-body {
    border-color: #3e8ed0;
    color: #296fa8;
  }

  .message.is-success {
    background-color: #effaf5;
  }

  .message.is-success .message-header {
    background-color: #48c78e;
    color: #fff;
  }

  .message.is-success .message-body {
    border-color: #48c78e;
    color: #257953;
  }

  .message.is-warning {
    background-color: #fffaeb;
  }

  .message.is-warning .message-header {
    background-color: #ffe08a;
    color: rgba(0, 0, 0, 0.7);
  }

  .message.is-warning .message-body {
    border-color: #ffe08a;
    color: #946c00;
  }

  .message.is-danger {
    background-color: #feecf0;
  }

  .message.is-danger .message-header {
    background-color: #f14668;
    color: #fff;
  }

  .message.is-danger .message-body {
    border-color: #f14668;
    color: #cc0f35;
  }

  .message-header {
    align-items: center;
    background-color: #4a4a4a;
    border-radius: 4px 4px 0 0;
    color: #fff;
    display: flex;
    font-weight: 700;
    justify-content: space-between;
    line-height: 1.25;
    padding: 0.75em 1em;
    position: relative;
  }

  .message-header .delete {
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 0.75em;
  }

  .message-header + .message-body {
    border-width: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .message-body {
    border-color: #dbdbdb;
    border-radius: 4px;
    border-style: solid;
    border-width: 0 0 0 4px;
    color: #4a4a4a;
    padding: 1.25em 1.5em;
  }

  .message-body code,
  .message-body pre {
    background-color: white;
  }

  .message-body pre code {
    background-color: transparent;
  }

  .modal {
    align-items: center;
    display: none;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    z-index: 40;
  }

  .modal.is-active {
    display: flex;
  }

  .modal-background {
    background-color: rgba(10, 10, 10, 0.86);
  }

  .modal-content,
  .modal-card {
    margin: 0 20px;
    max-height: calc(100vh - 160px);
    overflow: auto;
    position: relative;
    width: 100%;
  }

  @media screen and (min-width: 769px) {
    .modal-content,
    .modal-card {
      margin: 0 auto;
      max-height: calc(100vh - 40px);
      width: 640px;
    }
  }

  .modal-close {
    background: none;
    height: 40px;
    position: fixed;
    right: 20px;
    top: 20px;
    width: 40px;
  }

  .modal-card {
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 40px);
    overflow: hidden;
    -ms-overflow-y: visible;
  }

  .modal-card-head,
  .modal-card-foot {
    align-items: center;
    background-color: whitesmoke;
    display: flex;
    flex-shrink: 0;
    justify-content: flex-start;
    padding: 20px;
    position: relative;
  }

  .modal-card-head {
    border-bottom: 1px solid #dbdbdb;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .modal-card-title {
    color: #363636;
    flex-grow: 1;
    flex-shrink: 0;
    font-size: 1.5rem;
    line-height: 1;
  }

  .modal-card-foot {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 1px solid #dbdbdb;
  }

  .modal-card-foot .button:not(:last-child) {
    margin-right: 0.5em;
  }

  .modal-card-body {
    -webkit-overflow-scrolling: touch;
    background-color: white;
    flex-grow: 1;
    flex-shrink: 1;
    overflow: auto;
    padding: 20px;
  }

  .navbar {
    background-color: white;
    min-height: 3.25rem;
    position: relative;
    z-index: 30;
  }

  .navbar.is-white {
    background-color: white;
    color: #0a0a0a;
  }

  .navbar.is-white .navbar-brand > .navbar-item,
  .navbar.is-white .navbar-brand .navbar-link {
    color: #0a0a0a;
  }

  .navbar.is-white .navbar-brand > a.navbar-item:focus,
  .navbar.is-white .navbar-brand > a.navbar-item:hover,
  .navbar.is-white .navbar-brand > a.navbar-item.is-active,
  .navbar.is-white .navbar-brand .navbar-link:focus,
  .navbar.is-white .navbar-brand .navbar-link:hover,
  .navbar.is-white .navbar-brand .navbar-link.is-active {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }

  .navbar.is-white .navbar-brand .navbar-link::after {
    border-color: #0a0a0a;
  }

  .navbar.is-white .navbar-burger {
    color: #0a0a0a;
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-white .navbar-start > .navbar-item,
    .navbar.is-white .navbar-start .navbar-link,
    .navbar.is-white .navbar-end > .navbar-item,
    .navbar.is-white .navbar-end .navbar-link {
      color: #0a0a0a;
    }
    .navbar.is-white .navbar-start > a.navbar-item:focus,
    .navbar.is-white .navbar-start > a.navbar-item:hover,
    .navbar.is-white .navbar-start > a.navbar-item.is-active,
    .navbar.is-white .navbar-start .navbar-link:focus,
    .navbar.is-white .navbar-start .navbar-link:hover,
    .navbar.is-white .navbar-start .navbar-link.is-active,
    .navbar.is-white .navbar-end > a.navbar-item:focus,
    .navbar.is-white .navbar-end > a.navbar-item:hover,
    .navbar.is-white .navbar-end > a.navbar-item.is-active,
    .navbar.is-white .navbar-end .navbar-link:focus,
    .navbar.is-white .navbar-end .navbar-link:hover,
    .navbar.is-white .navbar-end .navbar-link.is-active {
      background-color: #f2f2f2;
      color: #0a0a0a;
    }
    .navbar.is-white .navbar-start .navbar-link::after,
    .navbar.is-white .navbar-end .navbar-link::after {
      border-color: #0a0a0a;
    }
    .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #f2f2f2;
      color: #0a0a0a;
    }
    .navbar.is-white .navbar-dropdown a.navbar-item.is-active {
      background-color: white;
      color: #0a0a0a;
    }
  }

  .navbar.is-black {
    background-color: #0a0a0a;
    color: white;
  }

  .navbar.is-black .navbar-brand > .navbar-item,
  .navbar.is-black .navbar-brand .navbar-link {
    color: white;
  }

  .navbar.is-black .navbar-brand > a.navbar-item:focus,
  .navbar.is-black .navbar-brand > a.navbar-item:hover,
  .navbar.is-black .navbar-brand > a.navbar-item.is-active,
  .navbar.is-black .navbar-brand .navbar-link:focus,
  .navbar.is-black .navbar-brand .navbar-link:hover,
  .navbar.is-black .navbar-brand .navbar-link.is-active {
    background-color: black;
    color: white;
  }

  .navbar.is-black .navbar-brand .navbar-link::after {
    border-color: white;
  }

  .navbar.is-black .navbar-burger {
    color: white;
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-black .navbar-start > .navbar-item,
    .navbar.is-black .navbar-start .navbar-link,
    .navbar.is-black .navbar-end > .navbar-item,
    .navbar.is-black .navbar-end .navbar-link {
      color: white;
    }
    .navbar.is-black .navbar-start > a.navbar-item:focus,
    .navbar.is-black .navbar-start > a.navbar-item:hover,
    .navbar.is-black .navbar-start > a.navbar-item.is-active,
    .navbar.is-black .navbar-start .navbar-link:focus,
    .navbar.is-black .navbar-start .navbar-link:hover,
    .navbar.is-black .navbar-start .navbar-link.is-active,
    .navbar.is-black .navbar-end > a.navbar-item:focus,
    .navbar.is-black .navbar-end > a.navbar-item:hover,
    .navbar.is-black .navbar-end > a.navbar-item.is-active,
    .navbar.is-black .navbar-end .navbar-link:focus,
    .navbar.is-black .navbar-end .navbar-link:hover,
    .navbar.is-black .navbar-end .navbar-link.is-active {
      background-color: black;
      color: white;
    }
    .navbar.is-black .navbar-start .navbar-link::after,
    .navbar.is-black .navbar-end .navbar-link::after {
      border-color: white;
    }
    .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: black;
      color: white;
    }
    .navbar.is-black .navbar-dropdown a.navbar-item.is-active {
      background-color: #0a0a0a;
      color: white;
    }
  }

  .navbar.is-light {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }

  .navbar.is-light .navbar-brand > .navbar-item,
  .navbar.is-light .navbar-brand .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }

  .navbar.is-light .navbar-brand > a.navbar-item:focus,
  .navbar.is-light .navbar-brand > a.navbar-item:hover,
  .navbar.is-light .navbar-brand > a.navbar-item.is-active,
  .navbar.is-light .navbar-brand .navbar-link:focus,
  .navbar.is-light .navbar-brand .navbar-link:hover,
  .navbar.is-light .navbar-brand .navbar-link.is-active {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }

  .navbar.is-light .navbar-brand .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }

  .navbar.is-light .navbar-burger {
    color: rgba(0, 0, 0, 0.7);
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-light .navbar-start > .navbar-item,
    .navbar.is-light .navbar-start .navbar-link,
    .navbar.is-light .navbar-end > .navbar-item,
    .navbar.is-light .navbar-end .navbar-link {
      color: rgba(0, 0, 0, 0.7);
    }
    .navbar.is-light .navbar-start > a.navbar-item:focus,
    .navbar.is-light .navbar-start > a.navbar-item:hover,
    .navbar.is-light .navbar-start > a.navbar-item.is-active,
    .navbar.is-light .navbar-start .navbar-link:focus,
    .navbar.is-light .navbar-start .navbar-link:hover,
    .navbar.is-light .navbar-start .navbar-link.is-active,
    .navbar.is-light .navbar-end > a.navbar-item:focus,
    .navbar.is-light .navbar-end > a.navbar-item:hover,
    .navbar.is-light .navbar-end > a.navbar-item.is-active,
    .navbar.is-light .navbar-end .navbar-link:focus,
    .navbar.is-light .navbar-end .navbar-link:hover,
    .navbar.is-light .navbar-end .navbar-link.is-active {
      background-color: #e8e8e8;
      color: rgba(0, 0, 0, 0.7);
    }
    .navbar.is-light .navbar-start .navbar-link::after,
    .navbar.is-light .navbar-end .navbar-link::after {
      border-color: rgba(0, 0, 0, 0.7);
    }
    .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #e8e8e8;
      color: rgba(0, 0, 0, 0.7);
    }
    .navbar.is-light .navbar-dropdown a.navbar-item.is-active {
      background-color: whitesmoke;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  .navbar.is-dark {
    background-color: #363636;
    color: #fff;
  }

  .navbar.is-dark .navbar-brand > .navbar-item,
  .navbar.is-dark .navbar-brand .navbar-link {
    color: #fff;
  }

  .navbar.is-dark .navbar-brand > a.navbar-item:focus,
  .navbar.is-dark .navbar-brand > a.navbar-item:hover,
  .navbar.is-dark .navbar-brand > a.navbar-item.is-active,
  .navbar.is-dark .navbar-brand .navbar-link:focus,
  .navbar.is-dark .navbar-brand .navbar-link:hover,
  .navbar.is-dark .navbar-brand .navbar-link.is-active {
    background-color: #292929;
    color: #fff;
  }

  .navbar.is-dark .navbar-brand .navbar-link::after {
    border-color: #fff;
  }

  .navbar.is-dark .navbar-burger {
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-dark .navbar-start > .navbar-item,
    .navbar.is-dark .navbar-start .navbar-link,
    .navbar.is-dark .navbar-end > .navbar-item,
    .navbar.is-dark .navbar-end .navbar-link {
      color: #fff;
    }
    .navbar.is-dark .navbar-start > a.navbar-item:focus,
    .navbar.is-dark .navbar-start > a.navbar-item:hover,
    .navbar.is-dark .navbar-start > a.navbar-item.is-active,
    .navbar.is-dark .navbar-start .navbar-link:focus,
    .navbar.is-dark .navbar-start .navbar-link:hover,
    .navbar.is-dark .navbar-start .navbar-link.is-active,
    .navbar.is-dark .navbar-end > a.navbar-item:focus,
    .navbar.is-dark .navbar-end > a.navbar-item:hover,
    .navbar.is-dark .navbar-end > a.navbar-item.is-active,
    .navbar.is-dark .navbar-end .navbar-link:focus,
    .navbar.is-dark .navbar-end .navbar-link:hover,
    .navbar.is-dark .navbar-end .navbar-link.is-active {
      background-color: #292929;
      color: #fff;
    }
    .navbar.is-dark .navbar-start .navbar-link::after,
    .navbar.is-dark .navbar-end .navbar-link::after {
      border-color: #fff;
    }
    .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #292929;
      color: #fff;
    }
    .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {
      background-color: #363636;
      color: #fff;
    }
  }

  .navbar.is-primary {
    background-color: #00d1b2;
    color: #fff;
  }

  .navbar.is-primary .navbar-brand > .navbar-item,
  .navbar.is-primary .navbar-brand .navbar-link {
    color: #fff;
  }

  .navbar.is-primary .navbar-brand > a.navbar-item:focus,
  .navbar.is-primary .navbar-brand > a.navbar-item:hover,
  .navbar.is-primary .navbar-brand > a.navbar-item.is-active,
  .navbar.is-primary .navbar-brand .navbar-link:focus,
  .navbar.is-primary .navbar-brand .navbar-link:hover,
  .navbar.is-primary .navbar-brand .navbar-link.is-active {
    background-color: #00b89c;
    color: #fff;
  }

  .navbar.is-primary .navbar-brand .navbar-link::after {
    border-color: #fff;
  }

  .navbar.is-primary .navbar-burger {
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-primary .navbar-start > .navbar-item,
    .navbar.is-primary .navbar-start .navbar-link,
    .navbar.is-primary .navbar-end > .navbar-item,
    .navbar.is-primary .navbar-end .navbar-link {
      color: #fff;
    }
    .navbar.is-primary .navbar-start > a.navbar-item:focus,
    .navbar.is-primary .navbar-start > a.navbar-item:hover,
    .navbar.is-primary .navbar-start > a.navbar-item.is-active,
    .navbar.is-primary .navbar-start .navbar-link:focus,
    .navbar.is-primary .navbar-start .navbar-link:hover,
    .navbar.is-primary .navbar-start .navbar-link.is-active,
    .navbar.is-primary .navbar-end > a.navbar-item:focus,
    .navbar.is-primary .navbar-end > a.navbar-item:hover,
    .navbar.is-primary .navbar-end > a.navbar-item.is-active,
    .navbar.is-primary .navbar-end .navbar-link:focus,
    .navbar.is-primary .navbar-end .navbar-link:hover,
    .navbar.is-primary .navbar-end .navbar-link.is-active {
      background-color: #00b89c;
      color: #fff;
    }
    .navbar.is-primary .navbar-start .navbar-link::after,
    .navbar.is-primary .navbar-end .navbar-link::after {
      border-color: #fff;
    }
    .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #00b89c;
      color: #fff;
    }
    .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {
      background-color: #00d1b2;
      color: #fff;
    }
  }

  .navbar.is-link {
    background-color: #485fc7;
    color: #fff;
  }

  .navbar.is-link .navbar-brand > .navbar-item,
  .navbar.is-link .navbar-brand .navbar-link {
    color: #fff;
  }

  .navbar.is-link .navbar-brand > a.navbar-item:focus,
  .navbar.is-link .navbar-brand > a.navbar-item:hover,
  .navbar.is-link .navbar-brand > a.navbar-item.is-active,
  .navbar.is-link .navbar-brand .navbar-link:focus,
  .navbar.is-link .navbar-brand .navbar-link:hover,
  .navbar.is-link .navbar-brand .navbar-link.is-active {
    background-color: #3a51bb;
    color: #fff;
  }

  .navbar.is-link .navbar-brand .navbar-link::after {
    border-color: #fff;
  }

  .navbar.is-link .navbar-burger {
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-link .navbar-start > .navbar-item,
    .navbar.is-link .navbar-start .navbar-link,
    .navbar.is-link .navbar-end > .navbar-item,
    .navbar.is-link .navbar-end .navbar-link {
      color: #fff;
    }
    .navbar.is-link .navbar-start > a.navbar-item:focus,
    .navbar.is-link .navbar-start > a.navbar-item:hover,
    .navbar.is-link .navbar-start > a.navbar-item.is-active,
    .navbar.is-link .navbar-start .navbar-link:focus,
    .navbar.is-link .navbar-start .navbar-link:hover,
    .navbar.is-link .navbar-start .navbar-link.is-active,
    .navbar.is-link .navbar-end > a.navbar-item:focus,
    .navbar.is-link .navbar-end > a.navbar-item:hover,
    .navbar.is-link .navbar-end > a.navbar-item.is-active,
    .navbar.is-link .navbar-end .navbar-link:focus,
    .navbar.is-link .navbar-end .navbar-link:hover,
    .navbar.is-link .navbar-end .navbar-link.is-active {
      background-color: #3a51bb;
      color: #fff;
    }
    .navbar.is-link .navbar-start .navbar-link::after,
    .navbar.is-link .navbar-end .navbar-link::after {
      border-color: #fff;
    }
    .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #3a51bb;
      color: #fff;
    }
    .navbar.is-link .navbar-dropdown a.navbar-item.is-active {
      background-color: #485fc7;
      color: #fff;
    }
  }

  .navbar.is-info {
    background-color: #3e8ed0;
    color: #fff;
  }

  .navbar.is-info .navbar-brand > .navbar-item,
  .navbar.is-info .navbar-brand .navbar-link {
    color: #fff;
  }

  .navbar.is-info .navbar-brand > a.navbar-item:focus,
  .navbar.is-info .navbar-brand > a.navbar-item:hover,
  .navbar.is-info .navbar-brand > a.navbar-item.is-active,
  .navbar.is-info .navbar-brand .navbar-link:focus,
  .navbar.is-info .navbar-brand .navbar-link:hover,
  .navbar.is-info .navbar-brand .navbar-link.is-active {
    background-color: #3082c5;
    color: #fff;
  }

  .navbar.is-info .navbar-brand .navbar-link::after {
    border-color: #fff;
  }

  .navbar.is-info .navbar-burger {
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-info .navbar-start > .navbar-item,
    .navbar.is-info .navbar-start .navbar-link,
    .navbar.is-info .navbar-end > .navbar-item,
    .navbar.is-info .navbar-end .navbar-link {
      color: #fff;
    }
    .navbar.is-info .navbar-start > a.navbar-item:focus,
    .navbar.is-info .navbar-start > a.navbar-item:hover,
    .navbar.is-info .navbar-start > a.navbar-item.is-active,
    .navbar.is-info .navbar-start .navbar-link:focus,
    .navbar.is-info .navbar-start .navbar-link:hover,
    .navbar.is-info .navbar-start .navbar-link.is-active,
    .navbar.is-info .navbar-end > a.navbar-item:focus,
    .navbar.is-info .navbar-end > a.navbar-item:hover,
    .navbar.is-info .navbar-end > a.navbar-item.is-active,
    .navbar.is-info .navbar-end .navbar-link:focus,
    .navbar.is-info .navbar-end .navbar-link:hover,
    .navbar.is-info .navbar-end .navbar-link.is-active {
      background-color: #3082c5;
      color: #fff;
    }
    .navbar.is-info .navbar-start .navbar-link::after,
    .navbar.is-info .navbar-end .navbar-link::after {
      border-color: #fff;
    }
    .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #3082c5;
      color: #fff;
    }
    .navbar.is-info .navbar-dropdown a.navbar-item.is-active {
      background-color: #3e8ed0;
      color: #fff;
    }
  }

  .navbar.is-success {
    background-color: #48c78e;
    color: #fff;
  }

  .navbar.is-success .navbar-brand > .navbar-item,
  .navbar.is-success .navbar-brand .navbar-link {
    color: #fff;
  }

  .navbar.is-success .navbar-brand > a.navbar-item:focus,
  .navbar.is-success .navbar-brand > a.navbar-item:hover,
  .navbar.is-success .navbar-brand > a.navbar-item.is-active,
  .navbar.is-success .navbar-brand .navbar-link:focus,
  .navbar.is-success .navbar-brand .navbar-link:hover,
  .navbar.is-success .navbar-brand .navbar-link.is-active {
    background-color: #3abb81;
    color: #fff;
  }

  .navbar.is-success .navbar-brand .navbar-link::after {
    border-color: #fff;
  }

  .navbar.is-success .navbar-burger {
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-success .navbar-start > .navbar-item,
    .navbar.is-success .navbar-start .navbar-link,
    .navbar.is-success .navbar-end > .navbar-item,
    .navbar.is-success .navbar-end .navbar-link {
      color: #fff;
    }
    .navbar.is-success .navbar-start > a.navbar-item:focus,
    .navbar.is-success .navbar-start > a.navbar-item:hover,
    .navbar.is-success .navbar-start > a.navbar-item.is-active,
    .navbar.is-success .navbar-start .navbar-link:focus,
    .navbar.is-success .navbar-start .navbar-link:hover,
    .navbar.is-success .navbar-start .navbar-link.is-active,
    .navbar.is-success .navbar-end > a.navbar-item:focus,
    .navbar.is-success .navbar-end > a.navbar-item:hover,
    .navbar.is-success .navbar-end > a.navbar-item.is-active,
    .navbar.is-success .navbar-end .navbar-link:focus,
    .navbar.is-success .navbar-end .navbar-link:hover,
    .navbar.is-success .navbar-end .navbar-link.is-active {
      background-color: #3abb81;
      color: #fff;
    }
    .navbar.is-success .navbar-start .navbar-link::after,
    .navbar.is-success .navbar-end .navbar-link::after {
      border-color: #fff;
    }
    .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #3abb81;
      color: #fff;
    }
    .navbar.is-success .navbar-dropdown a.navbar-item.is-active {
      background-color: #48c78e;
      color: #fff;
    }
  }

  .navbar.is-warning {
    background-color: #ffe08a;
    color: rgba(0, 0, 0, 0.7);
  }

  .navbar.is-warning .navbar-brand > .navbar-item,
  .navbar.is-warning .navbar-brand .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }

  .navbar.is-warning .navbar-brand > a.navbar-item:focus,
  .navbar.is-warning .navbar-brand > a.navbar-item:hover,
  .navbar.is-warning .navbar-brand > a.navbar-item.is-active,
  .navbar.is-warning .navbar-brand .navbar-link:focus,
  .navbar.is-warning .navbar-brand .navbar-link:hover,
  .navbar.is-warning .navbar-brand .navbar-link.is-active {
    background-color: #ffd970;
    color: rgba(0, 0, 0, 0.7);
  }

  .navbar.is-warning .navbar-brand .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }

  .navbar.is-warning .navbar-burger {
    color: rgba(0, 0, 0, 0.7);
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-warning .navbar-start > .navbar-item,
    .navbar.is-warning .navbar-start .navbar-link,
    .navbar.is-warning .navbar-end > .navbar-item,
    .navbar.is-warning .navbar-end .navbar-link {
      color: rgba(0, 0, 0, 0.7);
    }
    .navbar.is-warning .navbar-start > a.navbar-item:focus,
    .navbar.is-warning .navbar-start > a.navbar-item:hover,
    .navbar.is-warning .navbar-start > a.navbar-item.is-active,
    .navbar.is-warning .navbar-start .navbar-link:focus,
    .navbar.is-warning .navbar-start .navbar-link:hover,
    .navbar.is-warning .navbar-start .navbar-link.is-active,
    .navbar.is-warning .navbar-end > a.navbar-item:focus,
    .navbar.is-warning .navbar-end > a.navbar-item:hover,
    .navbar.is-warning .navbar-end > a.navbar-item.is-active,
    .navbar.is-warning .navbar-end .navbar-link:focus,
    .navbar.is-warning .navbar-end .navbar-link:hover,
    .navbar.is-warning .navbar-end .navbar-link.is-active {
      background-color: #ffd970;
      color: rgba(0, 0, 0, 0.7);
    }
    .navbar.is-warning .navbar-start .navbar-link::after,
    .navbar.is-warning .navbar-end .navbar-link::after {
      border-color: rgba(0, 0, 0, 0.7);
    }
    .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #ffd970;
      color: rgba(0, 0, 0, 0.7);
    }
    .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {
      background-color: #ffe08a;
      color: rgba(0, 0, 0, 0.7);
    }
  }

  .navbar.is-danger {
    background-color: #f14668;
    color: #fff;
  }

  .navbar.is-danger .navbar-brand > .navbar-item,
  .navbar.is-danger .navbar-brand .navbar-link {
    color: #fff;
  }

  .navbar.is-danger .navbar-brand > a.navbar-item:focus,
  .navbar.is-danger .navbar-brand > a.navbar-item:hover,
  .navbar.is-danger .navbar-brand > a.navbar-item.is-active,
  .navbar.is-danger .navbar-brand .navbar-link:focus,
  .navbar.is-danger .navbar-brand .navbar-link:hover,
  .navbar.is-danger .navbar-brand .navbar-link.is-active {
    background-color: #ef2e55;
    color: #fff;
  }

  .navbar.is-danger .navbar-brand .navbar-link::after {
    border-color: #fff;
  }

  .navbar.is-danger .navbar-burger {
    color: #fff;
  }

  @media screen and (min-width: 1024px) {
    .navbar.is-danger .navbar-start > .navbar-item,
    .navbar.is-danger .navbar-start .navbar-link,
    .navbar.is-danger .navbar-end > .navbar-item,
    .navbar.is-danger .navbar-end .navbar-link {
      color: #fff;
    }
    .navbar.is-danger .navbar-start > a.navbar-item:focus,
    .navbar.is-danger .navbar-start > a.navbar-item:hover,
    .navbar.is-danger .navbar-start > a.navbar-item.is-active,
    .navbar.is-danger .navbar-start .navbar-link:focus,
    .navbar.is-danger .navbar-start .navbar-link:hover,
    .navbar.is-danger .navbar-start .navbar-link.is-active,
    .navbar.is-danger .navbar-end > a.navbar-item:focus,
    .navbar.is-danger .navbar-end > a.navbar-item:hover,
    .navbar.is-danger .navbar-end > a.navbar-item.is-active,
    .navbar.is-danger .navbar-end .navbar-link:focus,
    .navbar.is-danger .navbar-end .navbar-link:hover,
    .navbar.is-danger .navbar-end .navbar-link.is-active {
      background-color: #ef2e55;
      color: #fff;
    }
    .navbar.is-danger .navbar-start .navbar-link::after,
    .navbar.is-danger .navbar-end .navbar-link::after {
      border-color: #fff;
    }
    .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,
    .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,
    .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #ef2e55;
      color: #fff;
    }
    .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {
      background-color: #f14668;
      color: #fff;
    }
  }

  .navbar > .container {
    align-items: stretch;
    display: flex;
    min-height: 3.25rem;
    width: 100%;
  }

  .navbar.has-shadow {
    box-shadow: 0 2px 0 0 whitesmoke;
  }

  .navbar.is-fixed-bottom,
  .navbar.is-fixed-top {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }

  .navbar.is-fixed-bottom {
    bottom: 0;
  }

  .navbar.is-fixed-bottom.has-shadow {
    box-shadow: 0 -2px 0 0 whitesmoke;
  }

  .navbar.is-fixed-top {
    top: 0;
  }

  html.has-navbar-fixed-top,
  body.has-navbar-fixed-top {
    padding-top: 3.25rem;
  }

  html.has-navbar-fixed-bottom,
  body.has-navbar-fixed-bottom {
    padding-bottom: 3.25rem;
  }

  .navbar-brand,
  .navbar-tabs {
    align-items: stretch;
    display: flex;
    flex-shrink: 0;
    min-height: 3.25rem;
  }

  .navbar-brand a.navbar-item:focus,
  .navbar-brand a.navbar-item:hover {
    background-color: transparent;
  }

  .navbar-tabs {
    -webkit-overflow-scrolling: touch;
    max-width: 100vw;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .navbar-burger {
    color: #4a4a4a;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
    display: block;
    height: 3.25rem;
    position: relative;
    width: 3.25rem;
    margin-left: auto;
  }

  .navbar-burger span {
    background-color: currentColor;
    display: block;
    height: 1px;
    left: calc(50% - 8px);
    position: absolute;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    width: 16px;
  }

  .navbar-burger span:nth-child(1) {
    top: calc(50% - 6px);
  }

  .navbar-burger span:nth-child(2) {
    top: calc(50% - 1px);
  }

  .navbar-burger span:nth-child(3) {
    top: calc(50% + 4px);
  }

  .navbar-burger:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .navbar-burger.is-active span:nth-child(1) {
    transform: translateY(5px) rotate(45deg);
  }

  .navbar-burger.is-active span:nth-child(2) {
    opacity: 0;
  }

  .navbar-burger.is-active span:nth-child(3) {
    transform: translateY(-5px) rotate(-45deg);
  }

  .navbar-menu {
    display: none;
  }

  .navbar-item,
  .navbar-link {
    color: #4a4a4a;
    display: block;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
  }

  .navbar-item .icon:only-child,
  .navbar-link .icon:only-child {
    margin-left: -0.25rem;
    margin-right: -0.25rem;
  }

  a.navbar-item,
  .navbar-link {
    cursor: pointer;
  }

  a.navbar-item:focus,
  a.navbar-item:focus-within,
  a.navbar-item:hover,
  a.navbar-item.is-active,
  .navbar-link:focus,
  .navbar-link:focus-within,
  .navbar-link:hover,
  .navbar-link.is-active {
    background-color: #fafafa;
    color: #485fc7;
  }

  .navbar-item {
    flex-grow: 0;
    flex-shrink: 0;
  }

  .navbar-item img {
    max-height: 1.75rem;
  }

  .navbar-item.has-dropdown {
    padding: 0;
  }

  .navbar-item.is-expanded {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .navbar-item.is-tab {
    border-bottom: 1px solid transparent;
    min-height: 3.25rem;
    padding-bottom: calc(0.5rem - 1px);
  }

  .navbar-item.is-tab:focus,
  .navbar-item.is-tab:hover {
    background-color: transparent;
    border-bottom-color: #485fc7;
  }

  .navbar-item.is-tab.is-active {
    background-color: transparent;
    border-bottom-color: #485fc7;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    color: #485fc7;
    padding-bottom: calc(0.5rem - 3px);
  }

  .navbar-content {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .navbar-link:not(.is-arrowless) {
    padding-right: 2.5em;
  }

  .navbar-link:not(.is-arrowless)::after {
    border-color: #485fc7;
    margin-top: -0.375em;
    right: 1.125em;
  }

  .navbar-dropdown {
    font-size: 0.875rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }

  .navbar-dropdown .navbar-item {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .navbar-divider {
    background-color: whitesmoke;
    border: none;
    display: none;
    height: 2px;
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 1023px) {
    .navbar > .container {
      display: block;
    }
    .navbar-brand .navbar-item,
    .navbar-tabs .navbar-item {
      align-items: center;
      display: flex;
    }
    .navbar-link::after {
      display: none;
    }
    .navbar-menu {
      background-color: white;
      box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
      padding: 0.5rem 0;
    }
    .navbar-menu.is-active {
      display: block;
    }
    .navbar.is-fixed-bottom-touch,
    .navbar.is-fixed-top-touch {
      left: 0;
      position: fixed;
      right: 0;
      z-index: 30;
    }
    .navbar.is-fixed-bottom-touch {
      bottom: 0;
    }
    .navbar.is-fixed-bottom-touch.has-shadow {
      box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
    }
    .navbar.is-fixed-top-touch {
      top: 0;
    }
    .navbar.is-fixed-top .navbar-menu,
    .navbar.is-fixed-top-touch .navbar-menu {
      -webkit-overflow-scrolling: touch;
      max-height: calc(100vh - 3.25rem);
      overflow: auto;
    }
    html.has-navbar-fixed-top-touch,
    body.has-navbar-fixed-top-touch {
      padding-top: 3.25rem;
    }
    html.has-navbar-fixed-bottom-touch,
    body.has-navbar-fixed-bottom-touch {
      padding-bottom: 3.25rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .navbar,
    .navbar-menu,
    .navbar-start,
    .navbar-end {
      align-items: stretch;
      display: flex;
    }
    .navbar {
      min-height: 3.25rem;
    }
    .navbar.is-spaced {
      padding: 1rem 2rem;
    }
    .navbar.is-spaced .navbar-start,
    .navbar.is-spaced .navbar-end {
      align-items: center;
    }
    .navbar.is-spaced a.navbar-item,
    .navbar.is-spaced .navbar-link {
      border-radius: 4px;
    }
    .navbar.is-transparent a.navbar-item:focus,
    .navbar.is-transparent a.navbar-item:hover,
    .navbar.is-transparent a.navbar-item.is-active,
    .navbar.is-transparent .navbar-link:focus,
    .navbar.is-transparent .navbar-link:hover,
    .navbar.is-transparent .navbar-link.is-active {
      background-color: transparent !important;
    }
    .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,
    .navbar.is-transparent
      .navbar-item.has-dropdown.is-hoverable:focus
      .navbar-link,
    .navbar.is-transparent
      .navbar-item.has-dropdown.is-hoverable:focus-within
      .navbar-link,
    .navbar.is-transparent
      .navbar-item.has-dropdown.is-hoverable:hover
      .navbar-link {
      background-color: transparent !important;
    }
    .navbar.is-transparent .navbar-dropdown a.navbar-item:focus,
    .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {
      background-color: whitesmoke;
      color: #0a0a0a;
    }
    .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {
      background-color: whitesmoke;
      color: #485fc7;
    }
    .navbar-burger {
      display: none;
    }
    .navbar-item,
    .navbar-link {
      align-items: center;
      display: flex;
    }
    .navbar-item.has-dropdown {
      align-items: stretch;
    }
    .navbar-item.has-dropdown-up .navbar-link::after {
      transform: rotate(135deg) translate(0.25em, -0.25em);
    }
    .navbar-item.has-dropdown-up .navbar-dropdown {
      border-bottom: 2px solid #dbdbdb;
      border-radius: 6px 6px 0 0;
      border-top: none;
      bottom: 100%;
      box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);
      top: auto;
    }
    .navbar-item.is-active .navbar-dropdown,
    .navbar-item.is-hoverable:focus .navbar-dropdown,
    .navbar-item.is-hoverable:focus-within .navbar-dropdown,
    .navbar-item.is-hoverable:hover .navbar-dropdown {
      display: block;
    }
    .navbar.is-spaced .navbar-item.is-active .navbar-dropdown,
    .navbar-item.is-active .navbar-dropdown.is-boxed,
    .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,
    .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,
    .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown,
    .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed,
    .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown,
    .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
    .navbar-menu {
      flex-grow: 1;
      flex-shrink: 0;
    }
    .navbar-start {
      justify-content: flex-start;
      margin-right: auto;
    }
    .navbar-end {
      justify-content: flex-end;
      margin-left: auto;
    }
    .navbar-dropdown {
      background-color: white;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      border-top: 2px solid #dbdbdb;
      box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
      display: none;
      font-size: 0.875rem;
      left: 0;
      min-width: 100%;
      position: absolute;
      top: 100%;
      z-index: 20;
    }
    .navbar-dropdown .navbar-item {
      padding: 0.375rem 1rem;
      white-space: nowrap;
    }
    .navbar-dropdown a.navbar-item {
      padding-right: 3rem;
    }
    .navbar-dropdown a.navbar-item:focus,
    .navbar-dropdown a.navbar-item:hover {
      background-color: whitesmoke;
      color: #0a0a0a;
    }
    .navbar-dropdown a.navbar-item.is-active {
      background-color: whitesmoke;
      color: #485fc7;
    }
    .navbar.is-spaced .navbar-dropdown,
    .navbar-dropdown.is-boxed {
      border-radius: 6px;
      border-top: none;
      box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1),
        0 0 0 1px rgba(10, 10, 10, 0.1);
      display: block;
      opacity: 0;
      pointer-events: none;
      top: calc(100% + (-4px));
      transform: translateY(-5px);
      transition-duration: 86ms;
      transition-property: opacity, transform;
    }
    .navbar-dropdown.is-right {
      left: auto;
      right: 0;
    }
    .navbar-divider {
      display: block;
    }
    .navbar > .container .navbar-brand,
    .container > .navbar .navbar-brand {
      margin-left: -0.75rem;
    }
    .navbar > .container .navbar-menu,
    .container > .navbar .navbar-menu {
      margin-right: -0.75rem;
    }
    .navbar.is-fixed-bottom-desktop,
    .navbar.is-fixed-top-desktop {
      left: 0;
      position: fixed;
      right: 0;
      z-index: 30;
    }
    .navbar.is-fixed-bottom-desktop {
      bottom: 0;
    }
    .navbar.is-fixed-bottom-desktop.has-shadow {
      box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
    }
    .navbar.is-fixed-top-desktop {
      top: 0;
    }
    html.has-navbar-fixed-top-desktop,
    body.has-navbar-fixed-top-desktop {
      padding-top: 3.25rem;
    }
    html.has-navbar-fixed-bottom-desktop,
    body.has-navbar-fixed-bottom-desktop {
      padding-bottom: 3.25rem;
    }
    html.has-spaced-navbar-fixed-top,
    body.has-spaced-navbar-fixed-top {
      padding-top: 5.25rem;
    }
    html.has-spaced-navbar-fixed-bottom,
    body.has-spaced-navbar-fixed-bottom {
      padding-bottom: 5.25rem;
    }
    a.navbar-item.is-active,
    .navbar-link.is-active {
      color: #0a0a0a;
    }
    a.navbar-item.is-active:not(:focus):not(:hover),
    .navbar-link.is-active:not(:focus):not(:hover) {
      background-color: transparent;
    }
    .navbar-item.has-dropdown:focus .navbar-link,
    .navbar-item.has-dropdown:hover .navbar-link,
    .navbar-item.has-dropdown.is-active .navbar-link {
      background-color: #fafafa;
    }
  }

  .hero.is-fullheight-with-navbar {
    min-height: calc(100vh - 3.25rem);
  }

  .pagination {
    font-size: 1rem;
    margin: -0.25rem;
  }

  .pagination.is-small {
    font-size: 0.75rem;
  }

  .pagination.is-medium {
    font-size: 1.25rem;
  }

  .pagination.is-large {
    font-size: 1.5rem;
  }

  .pagination.is-rounded .pagination-previous,
  .pagination.is-rounded .pagination-next {
    padding-left: 1em;
    padding-right: 1em;
    border-radius: 9999px;
  }

  .pagination.is-rounded .pagination-link {
    border-radius: 9999px;
  }

  .pagination,
  .pagination-list {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .pagination-previous,
  .pagination-next,
  .pagination-link,
  .pagination-ellipsis {
    font-size: 1em;
    justify-content: center;
    margin: 0.25rem;
    padding-left: 0.5em;
    padding-right: 0.5em;
    text-align: center;
  }

  .pagination-previous,
  .pagination-next,
  .pagination-link {
    border-color: #dbdbdb;
    color: #363636;
    min-width: 2.5em;
  }

  .pagination-previous:hover,
  .pagination-next:hover,
  .pagination-link:hover {
    border-color: #b5b5b5;
    color: #363636;
  }

  .pagination-previous:focus,
  .pagination-next:focus,
  .pagination-link:focus {
    border-color: #485fc7;
  }

  .pagination-previous:active,
  .pagination-next:active,
  .pagination-link:active {
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
  }

  .pagination-previous[disabled],
  .pagination-previous.is-disabled,
  .pagination-next[disabled],
  .pagination-next.is-disabled,
  .pagination-link[disabled],
  .pagination-link.is-disabled {
    background-color: #dbdbdb;
    border-color: #dbdbdb;
    box-shadow: none;
    color: #7a7a7a;
    opacity: 0.5;
  }

  .pagination-previous,
  .pagination-next {
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
  }

  .pagination-link.is-current {
    background-color: #485fc7;
    border-color: #485fc7;
    color: #fff;
  }

  .pagination-ellipsis {
    color: #b5b5b5;
    pointer-events: none;
  }

  .pagination-list {
    flex-wrap: wrap;
  }

  .pagination-list li {
    list-style: none;
  }

  @media screen and (max-width: 768px) {
    .pagination {
      flex-wrap: wrap;
    }
    .pagination-previous,
    .pagination-next {
      flex-grow: 1;
      flex-shrink: 1;
    }
    .pagination-list li {
      flex-grow: 1;
      flex-shrink: 1;
    }
  }

  @media screen and (min-width: 769px), print {
    .pagination-list {
      flex-grow: 1;
      flex-shrink: 1;
      justify-content: flex-start;
      order: 1;
    }
    .pagination-previous,
    .pagination-next,
    .pagination-link,
    .pagination-ellipsis {
      margin-bottom: 0;
      margin-top: 0;
    }
    .pagination-previous {
      order: 2;
    }
    .pagination-next {
      order: 3;
    }
    .pagination {
      justify-content: space-between;
      margin-bottom: 0;
      margin-top: 0;
    }
    .pagination.is-centered .pagination-previous {
      order: 1;
    }
    .pagination.is-centered .pagination-list {
      justify-content: center;
      order: 2;
    }
    .pagination.is-centered .pagination-next {
      order: 3;
    }
    .pagination.is-right .pagination-previous {
      order: 1;
    }
    .pagination.is-right .pagination-next {
      order: 2;
    }
    .pagination.is-right .pagination-list {
      justify-content: flex-end;
      order: 3;
    }
  }

  .panel {
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0px 0 1px rgba(10, 10, 10, 0.02);
    font-size: 1rem;
  }

  .panel:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .panel.is-white .panel-heading {
    background-color: white;
    color: #0a0a0a;
  }

  .panel.is-white .panel-tabs a.is-active {
    border-bottom-color: white;
  }

  .panel.is-white .panel-block.is-active .panel-icon {
    color: white;
  }

  .panel.is-black .panel-heading {
    background-color: #0a0a0a;
    color: white;
  }

  .panel.is-black .panel-tabs a.is-active {
    border-bottom-color: #0a0a0a;
  }

  .panel.is-black .panel-block.is-active .panel-icon {
    color: #0a0a0a;
  }

  .panel.is-light .panel-heading {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }

  .panel.is-light .panel-tabs a.is-active {
    border-bottom-color: whitesmoke;
  }

  .panel.is-light .panel-block.is-active .panel-icon {
    color: whitesmoke;
  }

  .panel.is-dark .panel-heading {
    background-color: #363636;
    color: #fff;
  }

  .panel.is-dark .panel-tabs a.is-active {
    border-bottom-color: #363636;
  }

  .panel.is-dark .panel-block.is-active .panel-icon {
    color: #363636;
  }

  .panel.is-primary .panel-heading {
    background-color: #00d1b2;
    color: #fff;
  }

  .panel.is-primary .panel-tabs a.is-active {
    border-bottom-color: #00d1b2;
  }

  .panel.is-primary .panel-block.is-active .panel-icon {
    color: #00d1b2;
  }

  .panel.is-link .panel-heading {
    background-color: #485fc7;
    color: #fff;
  }

  .panel.is-link .panel-tabs a.is-active {
    border-bottom-color: #485fc7;
  }

  .panel.is-link .panel-block.is-active .panel-icon {
    color: #485fc7;
  }

  .panel.is-info .panel-heading {
    background-color: #3e8ed0;
    color: #fff;
  }

  .panel.is-info .panel-tabs a.is-active {
    border-bottom-color: #3e8ed0;
  }

  .panel.is-info .panel-block.is-active .panel-icon {
    color: #3e8ed0;
  }

  .panel.is-success .panel-heading {
    background-color: #48c78e;
    color: #fff;
  }

  .panel.is-success .panel-tabs a.is-active {
    border-bottom-color: #48c78e;
  }

  .panel.is-success .panel-block.is-active .panel-icon {
    color: #48c78e;
  }

  .panel.is-warning .panel-heading {
    background-color: #ffe08a;
    color: rgba(0, 0, 0, 0.7);
  }

  .panel.is-warning .panel-tabs a.is-active {
    border-bottom-color: #ffe08a;
  }

  .panel.is-warning .panel-block.is-active .panel-icon {
    color: #ffe08a;
  }

  .panel.is-danger .panel-heading {
    background-color: #f14668;
    color: #fff;
  }

  .panel.is-danger .panel-tabs a.is-active {
    border-bottom-color: #f14668;
  }

  .panel.is-danger .panel-block.is-active .panel-icon {
    color: #f14668;
  }

  .panel-tabs:not(:last-child),
  .panel-block:not(:last-child) {
    border-bottom: 1px solid #ededed;
  }

  .panel-heading {
    background-color: #ededed;
    border-radius: 6px 6px 0 0;
    color: #363636;
    font-size: 1.25em;
    font-weight: 700;
    line-height: 1.25;
    padding: 0.75em 1em;
  }

  .panel-tabs {
    align-items: flex-end;
    display: flex;
    font-size: 0.875em;
    justify-content: center;
  }

  .panel-tabs a {
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: -1px;
    padding: 0.5em;
  }

  .panel-tabs a.is-active {
    border-bottom-color: #4a4a4a;
    color: #363636;
  }

  .panel-list a {
    color: #4a4a4a;
  }

  .panel-list a:hover {
    color: #485fc7;
  }

  .panel-block {
    align-items: center;
    color: #363636;
    display: flex;
    justify-content: flex-start;
    padding: 0.5em 0.75em;
  }

  .panel-block input[type="checkbox"] {
    margin-right: 0.75em;
  }

  .panel-block > .control {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
  }

  .panel-block.is-wrapped {
    flex-wrap: wrap;
  }

  .panel-block.is-active {
    border-left-color: #485fc7;
    color: #363636;
  }

  .panel-block.is-active .panel-icon {
    color: #485fc7;
  }

  .panel-block:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  a.panel-block,
  label.panel-block {
    cursor: pointer;
  }

  a.panel-block:hover,
  label.panel-block:hover {
    background-color: whitesmoke;
  }

  .panel-icon {
    display: inline-block;
    font-size: 14px;
    height: 1em;
    line-height: 1em;
    text-align: center;
    vertical-align: top;
    width: 1em;
    color: #7a7a7a;
    margin-right: 0.75em;
  }

  .panel-icon .fa {
    font-size: inherit;
    line-height: inherit;
  }

  .tabs {
    -webkit-overflow-scrolling: touch;
    align-items: stretch;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }

  .tabs a {
    align-items: center;
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    color: #4a4a4a;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
  }

  .tabs a:hover {
    border-bottom-color: #363636;
    color: #363636;
  }

  .tabs li {
    display: block;
  }

  .tabs li.is-active a {
    border-bottom-color: #485fc7;
    color: #485fc7;
  }

  .tabs ul {
    align-items: center;
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: flex-start;
  }

  .tabs ul.is-left {
    padding-right: 0.75em;
  }

  .tabs ul.is-center {
    flex: none;
    justify-content: center;
    padding-left: 0.75em;
    padding-right: 0.75em;
  }

  .tabs ul.is-right {
    justify-content: flex-end;
    padding-left: 0.75em;
  }

  .tabs .icon:first-child {
    margin-right: 0.5em;
  }

  .tabs .icon:last-child {
    margin-left: 0.5em;
  }

  .tabs.is-centered ul {
    justify-content: center;
  }

  .tabs.is-right ul {
    justify-content: flex-end;
  }

  .tabs.is-boxed a {
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
  }

  .tabs.is-boxed a:hover {
    background-color: whitesmoke;
    border-bottom-color: #dbdbdb;
  }

  .tabs.is-boxed li.is-active a {
    background-color: white;
    border-color: #dbdbdb;
    border-bottom-color: transparent !important;
  }

  .tabs.is-fullwidth li {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .tabs.is-toggle a {
    border-color: #dbdbdb;
    border-style: solid;
    border-width: 1px;
    margin-bottom: 0;
    position: relative;
  }

  .tabs.is-toggle a:hover {
    background-color: whitesmoke;
    border-color: #b5b5b5;
    z-index: 2;
  }

  .tabs.is-toggle li + li {
    margin-left: -1px;
  }

  .tabs.is-toggle li:first-child a {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .tabs.is-toggle li:last-child a {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .tabs.is-toggle li.is-active a {
    background-color: #485fc7;
    border-color: #485fc7;
    color: #fff;
    z-index: 1;
  }

  .tabs.is-toggle ul {
    border-bottom: none;
  }

  .tabs.is-toggle.is-toggle-rounded li:first-child a {
    border-bottom-left-radius: 9999px;
    border-top-left-radius: 9999px;
    padding-left: 1.25em;
  }

  .tabs.is-toggle.is-toggle-rounded li:last-child a {
    border-bottom-right-radius: 9999px;
    border-top-right-radius: 9999px;
    padding-right: 1.25em;
  }

  .tabs.is-small {
    font-size: 0.75rem;
  }

  .tabs.is-medium {
    font-size: 1.25rem;
  }

  .tabs.is-large {
    font-size: 1.5rem;
  }

  /* Bulma Grid */
  .column {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.75rem;
  }

  .columns.is-mobile > .column.is-narrow {
    flex: none;
    width: unset;
  }

  .columns.is-mobile > .column.is-full {
    flex: none;
    width: 100%;
  }

  .columns.is-mobile > .column.is-three-quarters {
    flex: none;
    width: 75%;
  }

  .columns.is-mobile > .column.is-two-thirds {
    flex: none;
    width: 66.6666%;
  }

  .columns.is-mobile > .column.is-half {
    flex: none;
    width: 50%;
  }

  .columns.is-mobile > .column.is-one-third {
    flex: none;
    width: 33.3333%;
  }

  .columns.is-mobile > .column.is-one-quarter {
    flex: none;
    width: 25%;
  }

  .columns.is-mobile > .column.is-one-fifth {
    flex: none;
    width: 20%;
  }

  .columns.is-mobile > .column.is-two-fifths {
    flex: none;
    width: 40%;
  }

  .columns.is-mobile > .column.is-three-fifths {
    flex: none;
    width: 60%;
  }

  .columns.is-mobile > .column.is-four-fifths {
    flex: none;
    width: 80%;
  }

  .columns.is-mobile > .column.is-offset-three-quarters {
    margin-left: 75%;
  }

  .columns.is-mobile > .column.is-offset-two-thirds {
    margin-left: 66.6666%;
  }

  .columns.is-mobile > .column.is-offset-half {
    margin-left: 50%;
  }

  .columns.is-mobile > .column.is-offset-one-third {
    margin-left: 33.3333%;
  }

  .columns.is-mobile > .column.is-offset-one-quarter {
    margin-left: 25%;
  }

  .columns.is-mobile > .column.is-offset-one-fifth {
    margin-left: 20%;
  }

  .columns.is-mobile > .column.is-offset-two-fifths {
    margin-left: 40%;
  }

  .columns.is-mobile > .column.is-offset-three-fifths {
    margin-left: 60%;
  }

  .columns.is-mobile > .column.is-offset-four-fifths {
    margin-left: 80%;
  }

  .columns.is-mobile > .column.is-0 {
    flex: none;
    width: 0%;
  }

  .columns.is-mobile > .column.is-offset-0 {
    margin-left: 0%;
  }

  .columns.is-mobile > .column.is-1 {
    flex: none;
    width: 8.33333%;
  }

  .columns.is-mobile > .column.is-offset-1 {
    margin-left: 8.33333%;
  }

  .columns.is-mobile > .column.is-2 {
    flex: none;
    width: 16.66667%;
  }

  .columns.is-mobile > .column.is-offset-2 {
    margin-left: 16.66667%;
  }

  .columns.is-mobile > .column.is-3 {
    flex: none;
    width: 25%;
  }

  .columns.is-mobile > .column.is-offset-3 {
    margin-left: 25%;
  }

  .columns.is-mobile > .column.is-4 {
    flex: none;
    width: 33.33333%;
  }

  .columns.is-mobile > .column.is-offset-4 {
    margin-left: 33.33333%;
  }

  .columns.is-mobile > .column.is-5 {
    flex: none;
    width: 41.66667%;
  }

  .columns.is-mobile > .column.is-offset-5 {
    margin-left: 41.66667%;
  }

  .columns.is-mobile > .column.is-6 {
    flex: none;
    width: 50%;
  }

  .columns.is-mobile > .column.is-offset-6 {
    margin-left: 50%;
  }

  .columns.is-mobile > .column.is-7 {
    flex: none;
    width: 58.33333%;
  }

  .columns.is-mobile > .column.is-offset-7 {
    margin-left: 58.33333%;
  }

  .columns.is-mobile > .column.is-8 {
    flex: none;
    width: 66.66667%;
  }

  .columns.is-mobile > .column.is-offset-8 {
    margin-left: 66.66667%;
  }

  .columns.is-mobile > .column.is-9 {
    flex: none;
    width: 75%;
  }

  .columns.is-mobile > .column.is-offset-9 {
    margin-left: 75%;
  }

  .columns.is-mobile > .column.is-10 {
    flex: none;
    width: 83.33333%;
  }

  .columns.is-mobile > .column.is-offset-10 {
    margin-left: 83.33333%;
  }

  .columns.is-mobile > .column.is-11 {
    flex: none;
    width: 91.66667%;
  }

  .columns.is-mobile > .column.is-offset-11 {
    margin-left: 91.66667%;
  }

  .columns.is-mobile > .column.is-12 {
    flex: none;
    width: 100%;
  }

  .columns.is-mobile > .column.is-offset-12 {
    margin-left: 100%;
  }

  @media screen and (max-width: 768px) {
    .column.is-narrow-mobile {
      flex: none;
      width: unset;
    }
    .column.is-full-mobile {
      flex: none;
      width: 100%;
    }
    .column.is-three-quarters-mobile {
      flex: none;
      width: 75%;
    }
    .column.is-two-thirds-mobile {
      flex: none;
      width: 66.6666%;
    }
    .column.is-half-mobile {
      flex: none;
      width: 50%;
    }
    .column.is-one-third-mobile {
      flex: none;
      width: 33.3333%;
    }
    .column.is-one-quarter-mobile {
      flex: none;
      width: 25%;
    }
    .column.is-one-fifth-mobile {
      flex: none;
      width: 20%;
    }
    .column.is-two-fifths-mobile {
      flex: none;
      width: 40%;
    }
    .column.is-three-fifths-mobile {
      flex: none;
      width: 60%;
    }
    .column.is-four-fifths-mobile {
      flex: none;
      width: 80%;
    }
    .column.is-offset-three-quarters-mobile {
      margin-left: 75%;
    }
    .column.is-offset-two-thirds-mobile {
      margin-left: 66.6666%;
    }
    .column.is-offset-half-mobile {
      margin-left: 50%;
    }
    .column.is-offset-one-third-mobile {
      margin-left: 33.3333%;
    }
    .column.is-offset-one-quarter-mobile {
      margin-left: 25%;
    }
    .column.is-offset-one-fifth-mobile {
      margin-left: 20%;
    }
    .column.is-offset-two-fifths-mobile {
      margin-left: 40%;
    }
    .column.is-offset-three-fifths-mobile {
      margin-left: 60%;
    }
    .column.is-offset-four-fifths-mobile {
      margin-left: 80%;
    }
    .column.is-0-mobile {
      flex: none;
      width: 0%;
    }
    .column.is-offset-0-mobile {
      margin-left: 0%;
    }
    .column.is-1-mobile {
      flex: none;
      width: 8.33333%;
    }
    .column.is-offset-1-mobile {
      margin-left: 8.33333%;
    }
    .column.is-2-mobile {
      flex: none;
      width: 16.66667%;
    }
    .column.is-offset-2-mobile {
      margin-left: 16.66667%;
    }
    .column.is-3-mobile {
      flex: none;
      width: 25%;
    }
    .column.is-offset-3-mobile {
      margin-left: 25%;
    }
    .column.is-4-mobile {
      flex: none;
      width: 33.33333%;
    }
    .column.is-offset-4-mobile {
      margin-left: 33.33333%;
    }
    .column.is-5-mobile {
      flex: none;
      width: 41.66667%;
    }
    .column.is-offset-5-mobile {
      margin-left: 41.66667%;
    }
    .column.is-6-mobile {
      flex: none;
      width: 50%;
    }
    .column.is-offset-6-mobile {
      margin-left: 50%;
    }
    .column.is-7-mobile {
      flex: none;
      width: 58.33333%;
    }
    .column.is-offset-7-mobile {
      margin-left: 58.33333%;
    }
    .column.is-8-mobile {
      flex: none;
      width: 66.66667%;
    }
    .column.is-offset-8-mobile {
      margin-left: 66.66667%;
    }
    .column.is-9-mobile {
      flex: none;
      width: 75%;
    }
    .column.is-offset-9-mobile {
      margin-left: 75%;
    }
    .column.is-10-mobile {
      flex: none;
      width: 83.33333%;
    }
    .column.is-offset-10-mobile {
      margin-left: 83.33333%;
    }
    .column.is-11-mobile {
      flex: none;
      width: 91.66667%;
    }
    .column.is-offset-11-mobile {
      margin-left: 91.66667%;
    }
    .column.is-12-mobile {
      flex: none;
      width: 100%;
    }
    .column.is-offset-12-mobile {
      margin-left: 100%;
    }
  }

  @media screen and (min-width: 769px), print {
    .column.is-narrow,
    .column.is-narrow-tablet {
      flex: none;
      width: unset;
    }
    .column.is-full,
    .column.is-full-tablet {
      flex: none;
      width: 100%;
    }
    .column.is-three-quarters,
    .column.is-three-quarters-tablet {
      flex: none;
      width: 75%;
    }
    .column.is-two-thirds,
    .column.is-two-thirds-tablet {
      flex: none;
      width: 66.6666%;
    }
    .column.is-half,
    .column.is-half-tablet {
      flex: none;
      width: 50%;
    }
    .column.is-one-third,
    .column.is-one-third-tablet {
      flex: none;
      width: 33.3333%;
    }
    .column.is-one-quarter,
    .column.is-one-quarter-tablet {
      flex: none;
      width: 25%;
    }
    .column.is-one-fifth,
    .column.is-one-fifth-tablet {
      flex: none;
      width: 20%;
    }
    .column.is-two-fifths,
    .column.is-two-fifths-tablet {
      flex: none;
      width: 40%;
    }
    .column.is-three-fifths,
    .column.is-three-fifths-tablet {
      flex: none;
      width: 60%;
    }
    .column.is-four-fifths,
    .column.is-four-fifths-tablet {
      flex: none;
      width: 80%;
    }
    .column.is-offset-three-quarters,
    .column.is-offset-three-quarters-tablet {
      margin-left: 75%;
    }
    .column.is-offset-two-thirds,
    .column.is-offset-two-thirds-tablet {
      margin-left: 66.6666%;
    }
    .column.is-offset-half,
    .column.is-offset-half-tablet {
      margin-left: 50%;
    }
    .column.is-offset-one-third,
    .column.is-offset-one-third-tablet {
      margin-left: 33.3333%;
    }
    .column.is-offset-one-quarter,
    .column.is-offset-one-quarter-tablet {
      margin-left: 25%;
    }
    .column.is-offset-one-fifth,
    .column.is-offset-one-fifth-tablet {
      margin-left: 20%;
    }
    .column.is-offset-two-fifths,
    .column.is-offset-two-fifths-tablet {
      margin-left: 40%;
    }
    .column.is-offset-three-fifths,
    .column.is-offset-three-fifths-tablet {
      margin-left: 60%;
    }
    .column.is-offset-four-fifths,
    .column.is-offset-four-fifths-tablet {
      margin-left: 80%;
    }
    .column.is-0,
    .column.is-0-tablet {
      flex: none;
      width: 0%;
    }
    .column.is-offset-0,
    .column.is-offset-0-tablet {
      margin-left: 0%;
    }
    .column.is-1,
    .column.is-1-tablet {
      flex: none;
      width: 8.33333%;
    }
    .column.is-offset-1,
    .column.is-offset-1-tablet {
      margin-left: 8.33333%;
    }
    .column.is-2,
    .column.is-2-tablet {
      flex: none;
      width: 16.66667%;
    }
    .column.is-offset-2,
    .column.is-offset-2-tablet {
      margin-left: 16.66667%;
    }
    .column.is-3,
    .column.is-3-tablet {
      flex: none;
      width: 25%;
    }
    .column.is-offset-3,
    .column.is-offset-3-tablet {
      margin-left: 25%;
    }
    .column.is-4,
    .column.is-4-tablet {
      flex: none;
      width: 33.33333%;
    }
    .column.is-offset-4,
    .column.is-offset-4-tablet {
      margin-left: 33.33333%;
    }
    .column.is-5,
    .column.is-5-tablet {
      flex: none;
      width: 41.66667%;
    }
    .column.is-offset-5,
    .column.is-offset-5-tablet {
      margin-left: 41.66667%;
    }
    .column.is-6,
    .column.is-6-tablet {
      flex: none;
      width: 50%;
    }
    .column.is-offset-6,
    .column.is-offset-6-tablet {
      margin-left: 50%;
    }
    .column.is-7,
    .column.is-7-tablet {
      flex: none;
      width: 58.33333%;
    }
    .column.is-offset-7,
    .column.is-offset-7-tablet {
      margin-left: 58.33333%;
    }
    .column.is-8,
    .column.is-8-tablet {
      flex: none;
      width: 66.66667%;
    }
    .column.is-offset-8,
    .column.is-offset-8-tablet {
      margin-left: 66.66667%;
    }
    .column.is-9,
    .column.is-9-tablet {
      flex: none;
      width: 75%;
    }
    .column.is-offset-9,
    .column.is-offset-9-tablet {
      margin-left: 75%;
    }
    .column.is-10,
    .column.is-10-tablet {
      flex: none;
      width: 83.33333%;
    }
    .column.is-offset-10,
    .column.is-offset-10-tablet {
      margin-left: 83.33333%;
    }
    .column.is-11,
    .column.is-11-tablet {
      flex: none;
      width: 91.66667%;
    }
    .column.is-offset-11,
    .column.is-offset-11-tablet {
      margin-left: 91.66667%;
    }
    .column.is-12,
    .column.is-12-tablet {
      flex: none;
      width: 100%;
    }
    .column.is-offset-12,
    .column.is-offset-12-tablet {
      margin-left: 100%;
    }
  }

  @media screen and (max-width: 1023px) {
    .column.is-narrow-touch {
      flex: none;
      width: unset;
    }
    .column.is-full-touch {
      flex: none;
      width: 100%;
    }
    .column.is-three-quarters-touch {
      flex: none;
      width: 75%;
    }
    .column.is-two-thirds-touch {
      flex: none;
      width: 66.6666%;
    }
    .column.is-half-touch {
      flex: none;
      width: 50%;
    }
    .column.is-one-third-touch {
      flex: none;
      width: 33.3333%;
    }
    .column.is-one-quarter-touch {
      flex: none;
      width: 25%;
    }
    .column.is-one-fifth-touch {
      flex: none;
      width: 20%;
    }
    .column.is-two-fifths-touch {
      flex: none;
      width: 40%;
    }
    .column.is-three-fifths-touch {
      flex: none;
      width: 60%;
    }
    .column.is-four-fifths-touch {
      flex: none;
      width: 80%;
    }
    .column.is-offset-three-quarters-touch {
      margin-left: 75%;
    }
    .column.is-offset-two-thirds-touch {
      margin-left: 66.6666%;
    }
    .column.is-offset-half-touch {
      margin-left: 50%;
    }
    .column.is-offset-one-third-touch {
      margin-left: 33.3333%;
    }
    .column.is-offset-one-quarter-touch {
      margin-left: 25%;
    }
    .column.is-offset-one-fifth-touch {
      margin-left: 20%;
    }
    .column.is-offset-two-fifths-touch {
      margin-left: 40%;
    }
    .column.is-offset-three-fifths-touch {
      margin-left: 60%;
    }
    .column.is-offset-four-fifths-touch {
      margin-left: 80%;
    }
    .column.is-0-touch {
      flex: none;
      width: 0%;
    }
    .column.is-offset-0-touch {
      margin-left: 0%;
    }
    .column.is-1-touch {
      flex: none;
      width: 8.33333%;
    }
    .column.is-offset-1-touch {
      margin-left: 8.33333%;
    }
    .column.is-2-touch {
      flex: none;
      width: 16.66667%;
    }
    .column.is-offset-2-touch {
      margin-left: 16.66667%;
    }
    .column.is-3-touch {
      flex: none;
      width: 25%;
    }
    .column.is-offset-3-touch {
      margin-left: 25%;
    }
    .column.is-4-touch {
      flex: none;
      width: 33.33333%;
    }
    .column.is-offset-4-touch {
      margin-left: 33.33333%;
    }
    .column.is-5-touch {
      flex: none;
      width: 41.66667%;
    }
    .column.is-offset-5-touch {
      margin-left: 41.66667%;
    }
    .column.is-6-touch {
      flex: none;
      width: 50%;
    }
    .column.is-offset-6-touch {
      margin-left: 50%;
    }
    .column.is-7-touch {
      flex: none;
      width: 58.33333%;
    }
    .column.is-offset-7-touch {
      margin-left: 58.33333%;
    }
    .column.is-8-touch {
      flex: none;
      width: 66.66667%;
    }
    .column.is-offset-8-touch {
      margin-left: 66.66667%;
    }
    .column.is-9-touch {
      flex: none;
      width: 75%;
    }
    .column.is-offset-9-touch {
      margin-left: 75%;
    }
    .column.is-10-touch {
      flex: none;
      width: 83.33333%;
    }
    .column.is-offset-10-touch {
      margin-left: 83.33333%;
    }
    .column.is-11-touch {
      flex: none;
      width: 91.66667%;
    }
    .column.is-offset-11-touch {
      margin-left: 91.66667%;
    }
    .column.is-12-touch {
      flex: none;
      width: 100%;
    }
    .column.is-offset-12-touch {
      margin-left: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    .column.is-narrow-desktop {
      flex: none;
      width: unset;
    }
    .column.is-full-desktop {
      flex: none;
      width: 100%;
    }
    .column.is-three-quarters-desktop {
      flex: none;
      width: 75%;
    }
    .column.is-two-thirds-desktop {
      flex: none;
      width: 66.6666%;
    }
    .column.is-half-desktop {
      flex: none;
      width: 50%;
    }
    .column.is-one-third-desktop {
      flex: none;
      width: 33.3333%;
    }
    .column.is-one-quarter-desktop {
      flex: none;
      width: 25%;
    }
    .column.is-one-fifth-desktop {
      flex: none;
      width: 20%;
    }
    .column.is-two-fifths-desktop {
      flex: none;
      width: 40%;
    }
    .column.is-three-fifths-desktop {
      flex: none;
      width: 60%;
    }
    .column.is-four-fifths-desktop {
      flex: none;
      width: 80%;
    }
    .column.is-offset-three-quarters-desktop {
      margin-left: 75%;
    }
    .column.is-offset-two-thirds-desktop {
      margin-left: 66.6666%;
    }
    .column.is-offset-half-desktop {
      margin-left: 50%;
    }
    .column.is-offset-one-third-desktop {
      margin-left: 33.3333%;
    }
    .column.is-offset-one-quarter-desktop {
      margin-left: 25%;
    }
    .column.is-offset-one-fifth-desktop {
      margin-left: 20%;
    }
    .column.is-offset-two-fifths-desktop {
      margin-left: 40%;
    }
    .column.is-offset-three-fifths-desktop {
      margin-left: 60%;
    }
    .column.is-offset-four-fifths-desktop {
      margin-left: 80%;
    }
    .column.is-0-desktop {
      flex: none;
      width: 0%;
    }
    .column.is-offset-0-desktop {
      margin-left: 0%;
    }
    .column.is-1-desktop {
      flex: none;
      width: 8.33333%;
    }
    .column.is-offset-1-desktop {
      margin-left: 8.33333%;
    }
    .column.is-2-desktop {
      flex: none;
      width: 16.66667%;
    }
    .column.is-offset-2-desktop {
      margin-left: 16.66667%;
    }
    .column.is-3-desktop {
      flex: none;
      width: 25%;
    }
    .column.is-offset-3-desktop {
      margin-left: 25%;
    }
    .column.is-4-desktop {
      flex: none;
      width: 33.33333%;
    }
    .column.is-offset-4-desktop {
      margin-left: 33.33333%;
    }
    .column.is-5-desktop {
      flex: none;
      width: 41.66667%;
    }
    .column.is-offset-5-desktop {
      margin-left: 41.66667%;
    }
    .column.is-6-desktop {
      flex: none;
      width: 50%;
    }
    .column.is-offset-6-desktop {
      margin-left: 50%;
    }
    .column.is-7-desktop {
      flex: none;
      width: 58.33333%;
    }
    .column.is-offset-7-desktop {
      margin-left: 58.33333%;
    }
    .column.is-8-desktop {
      flex: none;
      width: 66.66667%;
    }
    .column.is-offset-8-desktop {
      margin-left: 66.66667%;
    }
    .column.is-9-desktop {
      flex: none;
      width: 75%;
    }
    .column.is-offset-9-desktop {
      margin-left: 75%;
    }
    .column.is-10-desktop {
      flex: none;
      width: 83.33333%;
    }
    .column.is-offset-10-desktop {
      margin-left: 83.33333%;
    }
    .column.is-11-desktop {
      flex: none;
      width: 91.66667%;
    }
    .column.is-offset-11-desktop {
      margin-left: 91.66667%;
    }
    .column.is-12-desktop {
      flex: none;
      width: 100%;
    }
    .column.is-offset-12-desktop {
      margin-left: 100%;
    }
  }

  @media screen and (min-width: 1216px) {
    .column.is-narrow-widescreen {
      flex: none;
      width: unset;
    }
    .column.is-full-widescreen {
      flex: none;
      width: 100%;
    }
    .column.is-three-quarters-widescreen {
      flex: none;
      width: 75%;
    }
    .column.is-two-thirds-widescreen {
      flex: none;
      width: 66.6666%;
    }
    .column.is-half-widescreen {
      flex: none;
      width: 50%;
    }
    .column.is-one-third-widescreen {
      flex: none;
      width: 33.3333%;
    }
    .column.is-one-quarter-widescreen {
      flex: none;
      width: 25%;
    }
    .column.is-one-fifth-widescreen {
      flex: none;
      width: 20%;
    }
    .column.is-two-fifths-widescreen {
      flex: none;
      width: 40%;
    }
    .column.is-three-fifths-widescreen {
      flex: none;
      width: 60%;
    }
    .column.is-four-fifths-widescreen {
      flex: none;
      width: 80%;
    }
    .column.is-offset-three-quarters-widescreen {
      margin-left: 75%;
    }
    .column.is-offset-two-thirds-widescreen {
      margin-left: 66.6666%;
    }
    .column.is-offset-half-widescreen {
      margin-left: 50%;
    }
    .column.is-offset-one-third-widescreen {
      margin-left: 33.3333%;
    }
    .column.is-offset-one-quarter-widescreen {
      margin-left: 25%;
    }
    .column.is-offset-one-fifth-widescreen {
      margin-left: 20%;
    }
    .column.is-offset-two-fifths-widescreen {
      margin-left: 40%;
    }
    .column.is-offset-three-fifths-widescreen {
      margin-left: 60%;
    }
    .column.is-offset-four-fifths-widescreen {
      margin-left: 80%;
    }
    .column.is-0-widescreen {
      flex: none;
      width: 0%;
    }
    .column.is-offset-0-widescreen {
      margin-left: 0%;
    }
    .column.is-1-widescreen {
      flex: none;
      width: 8.33333%;
    }
    .column.is-offset-1-widescreen {
      margin-left: 8.33333%;
    }
    .column.is-2-widescreen {
      flex: none;
      width: 16.66667%;
    }
    .column.is-offset-2-widescreen {
      margin-left: 16.66667%;
    }
    .column.is-3-widescreen {
      flex: none;
      width: 25%;
    }
    .column.is-offset-3-widescreen {
      margin-left: 25%;
    }
    .column.is-4-widescreen {
      flex: none;
      width: 33.33333%;
    }
    .column.is-offset-4-widescreen {
      margin-left: 33.33333%;
    }
    .column.is-5-widescreen {
      flex: none;
      width: 41.66667%;
    }
    .column.is-offset-5-widescreen {
      margin-left: 41.66667%;
    }
    .column.is-6-widescreen {
      flex: none;
      width: 50%;
    }
    .column.is-offset-6-widescreen {
      margin-left: 50%;
    }
    .column.is-7-widescreen {
      flex: none;
      width: 58.33333%;
    }
    .column.is-offset-7-widescreen {
      margin-left: 58.33333%;
    }
    .column.is-8-widescreen {
      flex: none;
      width: 66.66667%;
    }
    .column.is-offset-8-widescreen {
      margin-left: 66.66667%;
    }
    .column.is-9-widescreen {
      flex: none;
      width: 75%;
    }
    .column.is-offset-9-widescreen {
      margin-left: 75%;
    }
    .column.is-10-widescreen {
      flex: none;
      width: 83.33333%;
    }
    .column.is-offset-10-widescreen {
      margin-left: 83.33333%;
    }
    .column.is-11-widescreen {
      flex: none;
      width: 91.66667%;
    }
    .column.is-offset-11-widescreen {
      margin-left: 91.66667%;
    }
    .column.is-12-widescreen {
      flex: none;
      width: 100%;
    }
    .column.is-offset-12-widescreen {
      margin-left: 100%;
    }
  }

  @media screen and (min-width: 1408px) {
    .column.is-narrow-fullhd {
      flex: none;
      width: unset;
    }
    .column.is-full-fullhd {
      flex: none;
      width: 100%;
    }
    .column.is-three-quarters-fullhd {
      flex: none;
      width: 75%;
    }
    .column.is-two-thirds-fullhd {
      flex: none;
      width: 66.6666%;
    }
    .column.is-half-fullhd {
      flex: none;
      width: 50%;
    }
    .column.is-one-third-fullhd {
      flex: none;
      width: 33.3333%;
    }
    .column.is-one-quarter-fullhd {
      flex: none;
      width: 25%;
    }
    .column.is-one-fifth-fullhd {
      flex: none;
      width: 20%;
    }
    .column.is-two-fifths-fullhd {
      flex: none;
      width: 40%;
    }
    .column.is-three-fifths-fullhd {
      flex: none;
      width: 60%;
    }
    .column.is-four-fifths-fullhd {
      flex: none;
      width: 80%;
    }
    .column.is-offset-three-quarters-fullhd {
      margin-left: 75%;
    }
    .column.is-offset-two-thirds-fullhd {
      margin-left: 66.6666%;
    }
    .column.is-offset-half-fullhd {
      margin-left: 50%;
    }
    .column.is-offset-one-third-fullhd {
      margin-left: 33.3333%;
    }
    .column.is-offset-one-quarter-fullhd {
      margin-left: 25%;
    }
    .column.is-offset-one-fifth-fullhd {
      margin-left: 20%;
    }
    .column.is-offset-two-fifths-fullhd {
      margin-left: 40%;
    }
    .column.is-offset-three-fifths-fullhd {
      margin-left: 60%;
    }
    .column.is-offset-four-fifths-fullhd {
      margin-left: 80%;
    }
    .column.is-0-fullhd {
      flex: none;
      width: 0%;
    }
    .column.is-offset-0-fullhd {
      margin-left: 0%;
    }
    .column.is-1-fullhd {
      flex: none;
      width: 8.33333%;
    }
    .column.is-offset-1-fullhd {
      margin-left: 8.33333%;
    }
    .column.is-2-fullhd {
      flex: none;
      width: 16.66667%;
    }
    .column.is-offset-2-fullhd {
      margin-left: 16.66667%;
    }
    .column.is-3-fullhd {
      flex: none;
      width: 25%;
    }
    .column.is-offset-3-fullhd {
      margin-left: 25%;
    }
    .column.is-4-fullhd {
      flex: none;
      width: 33.33333%;
    }
    .column.is-offset-4-fullhd {
      margin-left: 33.33333%;
    }
    .column.is-5-fullhd {
      flex: none;
      width: 41.66667%;
    }
    .column.is-offset-5-fullhd {
      margin-left: 41.66667%;
    }
    .column.is-6-fullhd {
      flex: none;
      width: 50%;
    }
    .column.is-offset-6-fullhd {
      margin-left: 50%;
    }
    .column.is-7-fullhd {
      flex: none;
      width: 58.33333%;
    }
    .column.is-offset-7-fullhd {
      margin-left: 58.33333%;
    }
    .column.is-8-fullhd {
      flex: none;
      width: 66.66667%;
    }
    .column.is-offset-8-fullhd {
      margin-left: 66.66667%;
    }
    .column.is-9-fullhd {
      flex: none;
      width: 75%;
    }
    .column.is-offset-9-fullhd {
      margin-left: 75%;
    }
    .column.is-10-fullhd {
      flex: none;
      width: 83.33333%;
    }
    .column.is-offset-10-fullhd {
      margin-left: 83.33333%;
    }
    .column.is-11-fullhd {
      flex: none;
      width: 91.66667%;
    }
    .column.is-offset-11-fullhd {
      margin-left: 91.66667%;
    }
    .column.is-12-fullhd {
      flex: none;
      width: 100%;
    }
    .column.is-offset-12-fullhd {
      margin-left: 100%;
    }
  }

  .columns {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
  }

  .columns:last-child {
    margin-bottom: -0.75rem;
  }

  .columns:not(:last-child) {
    margin-bottom: calc(1.5rem - 0.75rem);
  }

  .columns.is-centered {
    justify-content: center;
  }

  .columns.is-gapless {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }

  .columns.is-gapless > .column {
    margin: 0;
    padding: 0 !important;
  }

  .columns.is-gapless:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .columns.is-gapless:last-child {
    margin-bottom: 0;
  }

  .columns.is-mobile {
    display: flex;
  }

  .columns.is-multiline {
    flex-wrap: wrap;
  }

  .columns.is-vcentered {
    align-items: center;
  }

  @media screen and (min-width: 769px), print {
    .columns:not(.is-desktop) {
      display: flex;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-desktop {
      display: flex;
    }
  }

  .columns.is-variable {
    --columnGap: 0.75rem;
    margin-left: calc(-1 * var(--columnGap));
    margin-right: calc(-1 * var(--columnGap));
  }

  .columns.is-variable > .column {
    padding-left: var(--columnGap);
    padding-right: var(--columnGap);
  }

  .columns.is-variable.is-0 {
    --columnGap: 0rem;
  }

  @media screen and (max-width: 768px) {
    .columns.is-variable.is-0-mobile {
      --columnGap: 0rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .columns.is-variable.is-0-tablet {
      --columnGap: 0rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .columns.is-variable.is-0-tablet-only {
      --columnGap: 0rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .columns.is-variable.is-0-touch {
      --columnGap: 0rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-variable.is-0-desktop {
      --columnGap: 0rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .columns.is-variable.is-0-desktop-only {
      --columnGap: 0rem;
    }
  }

  @media screen and (min-width: 1216px) {
    .columns.is-variable.is-0-widescreen {
      --columnGap: 0rem;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .columns.is-variable.is-0-widescreen-only {
      --columnGap: 0rem;
    }
  }

  @media screen and (min-width: 1408px) {
    .columns.is-variable.is-0-fullhd {
      --columnGap: 0rem;
    }
  }

  .columns.is-variable.is-1 {
    --columnGap: 0.25rem;
  }

  @media screen and (max-width: 768px) {
    .columns.is-variable.is-1-mobile {
      --columnGap: 0.25rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .columns.is-variable.is-1-tablet {
      --columnGap: 0.25rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .columns.is-variable.is-1-tablet-only {
      --columnGap: 0.25rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .columns.is-variable.is-1-touch {
      --columnGap: 0.25rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-variable.is-1-desktop {
      --columnGap: 0.25rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .columns.is-variable.is-1-desktop-only {
      --columnGap: 0.25rem;
    }
  }

  @media screen and (min-width: 1216px) {
    .columns.is-variable.is-1-widescreen {
      --columnGap: 0.25rem;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .columns.is-variable.is-1-widescreen-only {
      --columnGap: 0.25rem;
    }
  }

  @media screen and (min-width: 1408px) {
    .columns.is-variable.is-1-fullhd {
      --columnGap: 0.25rem;
    }
  }

  .columns.is-variable.is-2 {
    --columnGap: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .columns.is-variable.is-2-mobile {
      --columnGap: 0.5rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .columns.is-variable.is-2-tablet {
      --columnGap: 0.5rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .columns.is-variable.is-2-tablet-only {
      --columnGap: 0.5rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .columns.is-variable.is-2-touch {
      --columnGap: 0.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-variable.is-2-desktop {
      --columnGap: 0.5rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .columns.is-variable.is-2-desktop-only {
      --columnGap: 0.5rem;
    }
  }

  @media screen and (min-width: 1216px) {
    .columns.is-variable.is-2-widescreen {
      --columnGap: 0.5rem;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .columns.is-variable.is-2-widescreen-only {
      --columnGap: 0.5rem;
    }
  }

  @media screen and (min-width: 1408px) {
    .columns.is-variable.is-2-fullhd {
      --columnGap: 0.5rem;
    }
  }

  .columns.is-variable.is-3 {
    --columnGap: 0.75rem;
  }

  @media screen and (max-width: 768px) {
    .columns.is-variable.is-3-mobile {
      --columnGap: 0.75rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .columns.is-variable.is-3-tablet {
      --columnGap: 0.75rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .columns.is-variable.is-3-tablet-only {
      --columnGap: 0.75rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .columns.is-variable.is-3-touch {
      --columnGap: 0.75rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-variable.is-3-desktop {
      --columnGap: 0.75rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .columns.is-variable.is-3-desktop-only {
      --columnGap: 0.75rem;
    }
  }

  @media screen and (min-width: 1216px) {
    .columns.is-variable.is-3-widescreen {
      --columnGap: 0.75rem;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .columns.is-variable.is-3-widescreen-only {
      --columnGap: 0.75rem;
    }
  }

  @media screen and (min-width: 1408px) {
    .columns.is-variable.is-3-fullhd {
      --columnGap: 0.75rem;
    }
  }

  .columns.is-variable.is-4 {
    --columnGap: 1rem;
  }

  @media screen and (max-width: 768px) {
    .columns.is-variable.is-4-mobile {
      --columnGap: 1rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .columns.is-variable.is-4-tablet {
      --columnGap: 1rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .columns.is-variable.is-4-tablet-only {
      --columnGap: 1rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .columns.is-variable.is-4-touch {
      --columnGap: 1rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-variable.is-4-desktop {
      --columnGap: 1rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .columns.is-variable.is-4-desktop-only {
      --columnGap: 1rem;
    }
  }

  @media screen and (min-width: 1216px) {
    .columns.is-variable.is-4-widescreen {
      --columnGap: 1rem;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .columns.is-variable.is-4-widescreen-only {
      --columnGap: 1rem;
    }
  }

  @media screen and (min-width: 1408px) {
    .columns.is-variable.is-4-fullhd {
      --columnGap: 1rem;
    }
  }

  .columns.is-variable.is-5 {
    --columnGap: 1.25rem;
  }

  @media screen and (max-width: 768px) {
    .columns.is-variable.is-5-mobile {
      --columnGap: 1.25rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .columns.is-variable.is-5-tablet {
      --columnGap: 1.25rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .columns.is-variable.is-5-tablet-only {
      --columnGap: 1.25rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .columns.is-variable.is-5-touch {
      --columnGap: 1.25rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-variable.is-5-desktop {
      --columnGap: 1.25rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .columns.is-variable.is-5-desktop-only {
      --columnGap: 1.25rem;
    }
  }

  @media screen and (min-width: 1216px) {
    .columns.is-variable.is-5-widescreen {
      --columnGap: 1.25rem;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .columns.is-variable.is-5-widescreen-only {
      --columnGap: 1.25rem;
    }
  }

  @media screen and (min-width: 1408px) {
    .columns.is-variable.is-5-fullhd {
      --columnGap: 1.25rem;
    }
  }

  .columns.is-variable.is-6 {
    --columnGap: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .columns.is-variable.is-6-mobile {
      --columnGap: 1.5rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .columns.is-variable.is-6-tablet {
      --columnGap: 1.5rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .columns.is-variable.is-6-tablet-only {
      --columnGap: 1.5rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .columns.is-variable.is-6-touch {
      --columnGap: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-variable.is-6-desktop {
      --columnGap: 1.5rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .columns.is-variable.is-6-desktop-only {
      --columnGap: 1.5rem;
    }
  }

  @media screen and (min-width: 1216px) {
    .columns.is-variable.is-6-widescreen {
      --columnGap: 1.5rem;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .columns.is-variable.is-6-widescreen-only {
      --columnGap: 1.5rem;
    }
  }

  @media screen and (min-width: 1408px) {
    .columns.is-variable.is-6-fullhd {
      --columnGap: 1.5rem;
    }
  }

  .columns.is-variable.is-7 {
    --columnGap: 1.75rem;
  }

  @media screen and (max-width: 768px) {
    .columns.is-variable.is-7-mobile {
      --columnGap: 1.75rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .columns.is-variable.is-7-tablet {
      --columnGap: 1.75rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .columns.is-variable.is-7-tablet-only {
      --columnGap: 1.75rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .columns.is-variable.is-7-touch {
      --columnGap: 1.75rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-variable.is-7-desktop {
      --columnGap: 1.75rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .columns.is-variable.is-7-desktop-only {
      --columnGap: 1.75rem;
    }
  }

  @media screen and (min-width: 1216px) {
    .columns.is-variable.is-7-widescreen {
      --columnGap: 1.75rem;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .columns.is-variable.is-7-widescreen-only {
      --columnGap: 1.75rem;
    }
  }

  @media screen and (min-width: 1408px) {
    .columns.is-variable.is-7-fullhd {
      --columnGap: 1.75rem;
    }
  }

  .columns.is-variable.is-8 {
    --columnGap: 2rem;
  }

  @media screen and (max-width: 768px) {
    .columns.is-variable.is-8-mobile {
      --columnGap: 2rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .columns.is-variable.is-8-tablet {
      --columnGap: 2rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .columns.is-variable.is-8-tablet-only {
      --columnGap: 2rem;
    }
  }

  @media screen and (max-width: 1023px) {
    .columns.is-variable.is-8-touch {
      --columnGap: 2rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .columns.is-variable.is-8-desktop {
      --columnGap: 2rem;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .columns.is-variable.is-8-desktop-only {
      --columnGap: 2rem;
    }
  }

  @media screen and (min-width: 1216px) {
    .columns.is-variable.is-8-widescreen {
      --columnGap: 2rem;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .columns.is-variable.is-8-widescreen-only {
      --columnGap: 2rem;
    }
  }

  @media screen and (min-width: 1408px) {
    .columns.is-variable.is-8-fullhd {
      --columnGap: 2rem;
    }
  }

  .tile {
    align-items: stretch;
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    min-height: -webkit-min-content;
    min-height: -moz-min-content;
    min-height: min-content;
  }

  .tile.is-ancestor {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
  }

  .tile.is-ancestor:last-child {
    margin-bottom: -0.75rem;
  }

  .tile.is-ancestor:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  .tile.is-child {
    margin: 0 !important;
  }

  .tile.is-parent {
    padding: 0.75rem;
  }

  .tile.is-vertical {
    flex-direction: column;
  }

  .tile.is-vertical > .tile.is-child:not(:last-child) {
    margin-bottom: 1.5rem !important;
  }

  @media screen and (min-width: 769px), print {
    .tile:not(.is-child) {
      display: flex;
    }
    .tile.is-1 {
      flex: none;
      width: 8.33333%;
    }
    .tile.is-2 {
      flex: none;
      width: 16.66667%;
    }
    .tile.is-3 {
      flex: none;
      width: 25%;
    }
    .tile.is-4 {
      flex: none;
      width: 33.33333%;
    }
    .tile.is-5 {
      flex: none;
      width: 41.66667%;
    }
    .tile.is-6 {
      flex: none;
      width: 50%;
    }
    .tile.is-7 {
      flex: none;
      width: 58.33333%;
    }
    .tile.is-8 {
      flex: none;
      width: 66.66667%;
    }
    .tile.is-9 {
      flex: none;
      width: 75%;
    }
    .tile.is-10 {
      flex: none;
      width: 83.33333%;
    }
    .tile.is-11 {
      flex: none;
      width: 91.66667%;
    }
    .tile.is-12 {
      flex: none;
      width: 100%;
    }
  }

  /* Bulma Helpers */
  .has-text-white {
    color: white !important;
  }

  a.has-text-white:hover,
  a.has-text-white:focus {
    color: #e6e6e6 !important;
  }

  .has-background-white {
    background-color: white !important;
  }

  .has-text-black {
    color: #0a0a0a !important;
  }

  a.has-text-black:hover,
  a.has-text-black:focus {
    color: black !important;
  }

  .has-background-black {
    background-color: #0a0a0a !important;
  }

  .has-text-light {
    color: whitesmoke !important;
  }

  a.has-text-light:hover,
  a.has-text-light:focus {
    color: #dbdbdb !important;
  }

  .has-background-light {
    background-color: whitesmoke !important;
  }

  .has-text-dark {
    color: #363636 !important;
  }

  a.has-text-dark:hover,
  a.has-text-dark:focus {
    color: #1c1c1c !important;
  }

  .has-background-dark {
    background-color: #363636 !important;
  }

  .has-text-primary {
    color: #00d1b2 !important;
  }

  a.has-text-primary:hover,
  a.has-text-primary:focus {
    color: #009e86 !important;
  }

  .has-background-primary {
    background-color: #00d1b2 !important;
  }

  .has-text-primary-light {
    color: #ebfffc !important;
  }

  a.has-text-primary-light:hover,
  a.has-text-primary-light:focus {
    color: #b8fff4 !important;
  }

  .has-background-primary-light {
    background-color: #ebfffc !important;
  }

  .has-text-primary-dark {
    color: #00947e !important;
  }

  a.has-text-primary-dark:hover,
  a.has-text-primary-dark:focus {
    color: #00c7a9 !important;
  }

  .has-background-primary-dark {
    background-color: #00947e !important;
  }

  .has-text-link {
    color: #485fc7 !important;
  }

  a.has-text-link:hover,
  a.has-text-link:focus {
    color: #3449a8 !important;
  }

  .has-background-link {
    background-color: #485fc7 !important;
  }

  .has-text-link-light {
    color: #eff1fa !important;
  }

  a.has-text-link-light:hover,
  a.has-text-link-light:focus {
    color: #c8cfee !important;
  }

  .has-background-link-light {
    background-color: #eff1fa !important;
  }

  .has-text-link-dark {
    color: #3850b7 !important;
  }

  a.has-text-link-dark:hover,
  a.has-text-link-dark:focus {
    color: #576dcb !important;
  }

  .has-background-link-dark {
    background-color: #3850b7 !important;
  }

  .has-text-info {
    color: #3e8ed0 !important;
  }

  a.has-text-info:hover,
  a.has-text-info:focus {
    color: #2b74b1 !important;
  }

  .has-background-info {
    background-color: #3e8ed0 !important;
  }

  .has-text-info-light {
    color: #eff5fb !important;
  }

  a.has-text-info-light:hover,
  a.has-text-info-light:focus {
    color: #c6ddf1 !important;
  }

  .has-background-info-light {
    background-color: #eff5fb !important;
  }

  .has-text-info-dark {
    color: #296fa8 !important;
  }

  a.has-text-info-dark:hover,
  a.has-text-info-dark:focus {
    color: #368ace !important;
  }

  .has-background-info-dark {
    background-color: #296fa8 !important;
  }

  .has-text-success {
    color: #48c78e !important;
  }

  a.has-text-success:hover,
  a.has-text-success:focus {
    color: #34a873 !important;
  }

  .has-background-success {
    background-color: #48c78e !important;
  }

  .has-text-success-light {
    color: #effaf5 !important;
  }

  a.has-text-success-light:hover,
  a.has-text-success-light:focus {
    color: #c8eedd !important;
  }

  .has-background-success-light {
    background-color: #effaf5 !important;
  }

  .has-text-success-dark {
    color: #257953 !important;
  }

  a.has-text-success-dark:hover,
  a.has-text-success-dark:focus {
    color: #31a06e !important;
  }

  .has-background-success-dark {
    background-color: #257953 !important;
  }

  .has-text-warning {
    color: #ffe08a !important;
  }

  a.has-text-warning:hover,
  a.has-text-warning:focus {
    color: #ffd257 !important;
  }

  .has-background-warning {
    background-color: #ffe08a !important;
  }

  .has-text-warning-light {
    color: #fffaeb !important;
  }

  a.has-text-warning-light:hover,
  a.has-text-warning-light:focus {
    color: #ffecb8 !important;
  }

  .has-background-warning-light {
    background-color: #fffaeb !important;
  }

  .has-text-warning-dark {
    color: #946c00 !important;
  }

  a.has-text-warning-dark:hover,
  a.has-text-warning-dark:focus {
    color: #c79200 !important;
  }

  .has-background-warning-dark {
    background-color: #946c00 !important;
  }

  .has-text-danger {
    color: #f14668 !important;
  }

  a.has-text-danger:hover,
  a.has-text-danger:focus {
    color: #ee1742 !important;
  }

  .has-background-danger {
    background-color: #f14668 !important;
  }

  .has-text-danger-light {
    color: #feecf0 !important;
  }

  a.has-text-danger-light:hover,
  a.has-text-danger-light:focus {
    color: #fabdc9 !important;
  }

  .has-background-danger-light {
    background-color: #feecf0 !important;
  }

  .has-text-danger-dark {
    color: #cc0f35 !important;
  }

  a.has-text-danger-dark:hover,
  a.has-text-danger-dark:focus {
    color: #ee2049 !important;
  }

  .has-background-danger-dark {
    background-color: #cc0f35 !important;
  }

  .has-text-black-bis {
    color: #121212 !important;
  }

  .has-background-black-bis {
    background-color: #121212 !important;
  }

  .has-text-black-ter {
    color: #242424 !important;
  }

  .has-background-black-ter {
    background-color: #242424 !important;
  }

  .has-text-grey-darker {
    color: #363636 !important;
  }

  .has-background-grey-darker {
    background-color: #363636 !important;
  }

  .has-text-grey-dark {
    color: #4a4a4a !important;
  }

  .has-background-grey-dark {
    background-color: #4a4a4a !important;
  }

  .has-text-grey {
    color: #7a7a7a !important;
  }

  .has-background-grey {
    background-color: #7a7a7a !important;
  }

  .has-text-grey-light {
    color: #b5b5b5 !important;
  }

  .has-background-grey-light {
    background-color: #b5b5b5 !important;
  }

  .has-text-grey-lighter {
    color: #dbdbdb !important;
  }

  .has-background-grey-lighter {
    background-color: #dbdbdb !important;
  }

  .has-text-white-ter {
    color: whitesmoke !important;
  }

  .has-background-white-ter {
    background-color: whitesmoke !important;
  }

  .has-text-white-bis {
    color: #fafafa !important;
  }

  .has-background-white-bis {
    background-color: #fafafa !important;
  }

  .is-flex-direction-row {
    flex-direction: row !important;
  }

  .is-flex-direction-row-reverse {
    flex-direction: row-reverse !important;
  }

  .is-flex-direction-column {
    flex-direction: column !important;
  }

  .is-flex-direction-column-reverse {
    flex-direction: column-reverse !important;
  }

  .is-flex-wrap-nowrap {
    flex-wrap: nowrap !important;
  }

  .is-flex-wrap-wrap {
    flex-wrap: wrap !important;
  }

  .is-flex-wrap-wrap-reverse {
    flex-wrap: wrap-reverse !important;
  }

  .is-justify-content-flex-start {
    justify-content: flex-start !important;
  }

  .is-justify-content-flex-end {
    justify-content: flex-end !important;
  }

  .is-justify-content-center {
    justify-content: center !important;
  }

  .is-justify-content-space-between {
    justify-content: space-between !important;
  }

  .is-justify-content-space-around {
    justify-content: space-around !important;
  }

  .is-justify-content-space-evenly {
    justify-content: space-evenly !important;
  }

  .is-justify-content-start {
    justify-content: start !important;
  }

  .is-justify-content-end {
    justify-content: end !important;
  }

  .is-justify-content-left {
    justify-content: left !important;
  }

  .is-justify-content-right {
    justify-content: right !important;
  }

  .is-align-content-flex-start {
    align-content: flex-start !important;
  }

  .is-align-content-flex-end {
    align-content: flex-end !important;
  }

  .is-align-content-center {
    align-content: center !important;
  }

  .is-align-content-space-between {
    align-content: space-between !important;
  }

  .is-align-content-space-around {
    align-content: space-around !important;
  }

  .is-align-content-space-evenly {
    align-content: space-evenly !important;
  }

  .is-align-content-stretch {
    align-content: stretch !important;
  }

  .is-align-content-start {
    align-content: start !important;
  }

  .is-align-content-end {
    align-content: end !important;
  }

  .is-align-content-baseline {
    align-content: baseline !important;
  }

  .is-align-items-stretch {
    align-items: stretch !important;
  }

  .is-align-items-flex-start {
    align-items: flex-start !important;
  }

  .is-align-items-flex-end {
    align-items: flex-end !important;
  }

  .is-align-items-center {
    align-items: center !important;
  }

  .is-align-items-baseline {
    align-items: baseline !important;
  }

  .is-align-items-start {
    align-items: start !important;
  }

  .is-align-items-end {
    align-items: end !important;
  }

  .is-align-items-self-start {
    align-items: self-start !important;
  }

  .is-align-items-self-end {
    align-items: self-end !important;
  }

  .is-align-self-auto {
    align-self: auto !important;
  }

  .is-align-self-flex-start {
    align-self: flex-start !important;
  }

  .is-align-self-flex-end {
    align-self: flex-end !important;
  }

  .is-align-self-center {
    align-self: center !important;
  }

  .is-align-self-baseline {
    align-self: baseline !important;
  }

  .is-align-self-stretch {
    align-self: stretch !important;
  }

  .is-flex-grow-0 {
    flex-grow: 0 !important;
  }

  .is-flex-grow-1 {
    flex-grow: 1 !important;
  }

  .is-flex-grow-2 {
    flex-grow: 2 !important;
  }

  .is-flex-grow-3 {
    flex-grow: 3 !important;
  }

  .is-flex-grow-4 {
    flex-grow: 4 !important;
  }

  .is-flex-grow-5 {
    flex-grow: 5 !important;
  }

  .is-flex-shrink-0 {
    flex-shrink: 0 !important;
  }

  .is-flex-shrink-1 {
    flex-shrink: 1 !important;
  }

  .is-flex-shrink-2 {
    flex-shrink: 2 !important;
  }

  .is-flex-shrink-3 {
    flex-shrink: 3 !important;
  }

  .is-flex-shrink-4 {
    flex-shrink: 4 !important;
  }

  .is-flex-shrink-5 {
    flex-shrink: 5 !important;
  }

  .is-clearfix::after {
    clear: both;
    content: " ";
    display: table;
  }

  .is-pulled-left {
    float: left !important;
  }

  .is-pulled-right {
    float: right !important;
  }

  .is-radiusless {
    border-radius: 0 !important;
  }

  .is-shadowless {
    box-shadow: none !important;
  }

  .is-clickable {
    cursor: pointer !important;
    pointer-events: all !important;
  }

  .is-clipped {
    overflow: hidden !important;
  }

  .is-relative {
    position: relative !important;
  }

  .is-marginless {
    margin: 0 !important;
  }

  .is-paddingless {
    padding: 0 !important;
  }

  .m-0 {
    margin: 0 !important;
  }

  .mt-0 {
    margin-top: 0 !important;
  }

  .mr-0 {
    margin-right: 0 !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .ml-0 {
    margin-left: 0 !important;
  }

  .mx-0 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  .m-1 {
    margin: 0.25rem !important;
  }

  .mt-1 {
    margin-top: 0.25rem !important;
  }

  .mr-1 {
    margin-right: 0.25rem !important;
  }

  .mb-1 {
    margin-bottom: 0.25rem !important;
  }

  .ml-1 {
    margin-left: 0.25rem !important;
  }

  .mx-1 {
    margin-left: 0.25rem !important;
    margin-right: 0.25rem !important;
  }

  .my-1 {
    margin-top: 0.25rem !important;
    margin-bottom: 0.25rem !important;
  }

  .m-2 {
    margin: 0.5rem !important;
  }

  .mt-2 {
    margin-top: 0.5rem !important;
  }

  .mr-2 {
    margin-right: 0.5rem !important;
  }

  .mb-2 {
    margin-bottom: 0.5rem !important;
  }

  .ml-2 {
    margin-left: 0.5rem !important;
  }

  .mx-2 {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important;
  }

  .my-2 {
    margin-top: 0.5rem !important;
    margin-bottom: 0.5rem !important;
  }

  .m-3 {
    margin: 0.75rem !important;
  }

  .mt-3 {
    margin-top: 0.75rem !important;
  }

  .mr-3 {
    margin-right: 0.75rem !important;
  }

  .mb-3 {
    margin-bottom: 0.75rem !important;
  }

  .ml-3 {
    margin-left: 0.75rem !important;
  }

  .mx-3 {
    margin-left: 0.75rem !important;
    margin-right: 0.75rem !important;
  }

  .my-3 {
    margin-top: 0.75rem !important;
    margin-bottom: 0.75rem !important;
  }

  .m-4 {
    margin: 1rem !important;
  }

  .mt-4 {
    margin-top: 1rem !important;
  }

  .mr-4 {
    margin-right: 1rem !important;
  }

  .mb-4 {
    margin-bottom: 1rem !important;
  }

  .ml-4 {
    margin-left: 1rem !important;
  }

  .mx-4 {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
  }

  .my-4 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }

  .m-5 {
    margin: 1.5rem !important;
  }

  .mt-5 {
    margin-top: 1.5rem !important;
  }

  .mr-5 {
    margin-right: 1.5rem !important;
  }

  .mb-5 {
    margin-bottom: 1.5rem !important;
  }

  .ml-5 {
    margin-left: 1.5rem !important;
  }

  .mx-5 {
    margin-left: 1.5rem !important;
    margin-right: 1.5rem !important;
  }

  .my-5 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .m-6 {
    margin: 3rem !important;
  }

  .mt-6 {
    margin-top: 3rem !important;
  }

  .mr-6 {
    margin-right: 3rem !important;
  }

  .mb-6 {
    margin-bottom: 3rem !important;
  }

  .ml-6 {
    margin-left: 3rem !important;
  }

  .mx-6 {
    margin-left: 3rem !important;
    margin-right: 3rem !important;
  }

  .my-6 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important;
  }

  .m-auto {
    margin: auto !important;
  }

  .mt-auto {
    margin-top: auto !important;
  }

  .mr-auto {
    margin-right: auto !important;
  }

  .mb-auto {
    margin-bottom: auto !important;
  }

  .ml-auto {
    margin-left: auto !important;
  }

  .mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important;
  }

  .p-0 {
    padding: 0 !important;
  }

  .pt-0 {
    padding-top: 0 !important;
  }

  .pr-0 {
    padding-right: 0 !important;
  }

  .pb-0 {
    padding-bottom: 0 !important;
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .px-0 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .p-1 {
    padding: 0.25rem !important;
  }

  .pt-1 {
    padding-top: 0.25rem !important;
  }

  .pr-1 {
    padding-right: 0.25rem !important;
  }

  .pb-1 {
    padding-bottom: 0.25rem !important;
  }

  .pl-1 {
    padding-left: 0.25rem !important;
  }

  .px-1 {
    padding-left: 0.25rem !important;
    padding-right: 0.25rem !important;
  }

  .py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .p-2 {
    padding: 0.5rem !important;
  }

  .pt-2 {
    padding-top: 0.5rem !important;
  }

  .pr-2 {
    padding-right: 0.5rem !important;
  }

  .pb-2 {
    padding-bottom: 0.5rem !important;
  }

  .pl-2 {
    padding-left: 0.5rem !important;
  }

  .px-2 {
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;
  }

  .py-2 {
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .p-3 {
    padding: 0.75rem !important;
  }

  .pt-3 {
    padding-top: 0.75rem !important;
  }

  .pr-3 {
    padding-right: 0.75rem !important;
  }

  .pb-3 {
    padding-bottom: 0.75rem !important;
  }

  .pl-3 {
    padding-left: 0.75rem !important;
  }

  .px-3 {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
  }

  .py-3 {
    padding-top: 0.75rem !important;
    padding-bottom: 0.75rem !important;
  }

  .p-4 {
    padding: 1rem !important;
  }

  .pt-4 {
    padding-top: 1rem !important;
  }

  .pr-4 {
    padding-right: 1rem !important;
  }

  .pb-4 {
    padding-bottom: 1rem !important;
  }

  .pl-4 {
    padding-left: 1rem !important;
  }

  .px-4 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .py-4 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
  }

  .p-5 {
    padding: 1.5rem !important;
  }

  .pt-5 {
    padding-top: 1.5rem !important;
  }

  .pr-5 {
    padding-right: 1.5rem !important;
  }

  .pb-5 {
    padding-bottom: 1.5rem !important;
  }

  .pl-5 {
    padding-left: 1.5rem !important;
  }

  .px-5 {
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }

  .py-5 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }

  .p-6 {
    padding: 3rem !important;
  }

  .pt-6 {
    padding-top: 3rem !important;
  }

  .pr-6 {
    padding-right: 3rem !important;
  }

  .pb-6 {
    padding-bottom: 3rem !important;
  }

  .pl-6 {
    padding-left: 3rem !important;
  }

  .px-6 {
    padding-left: 3rem !important;
    padding-right: 3rem !important;
  }

  .py-6 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }

  .p-auto {
    padding: auto !important;
  }

  .pt-auto {
    padding-top: auto !important;
  }

  .pr-auto {
    padding-right: auto !important;
  }

  .pb-auto {
    padding-bottom: auto !important;
  }

  .pl-auto {
    padding-left: auto !important;
  }

  .px-auto {
    padding-left: auto !important;
    padding-right: auto !important;
  }

  .py-auto {
    padding-top: auto !important;
    padding-bottom: auto !important;
  }

  .is-size-1 {
    font-size: 3rem !important;
  }

  .is-size-2 {
    font-size: 2.5rem !important;
  }

  .is-size-3 {
    font-size: 2rem !important;
  }

  .is-size-4 {
    font-size: 1.5rem !important;
  }

  .is-size-5 {
    font-size: 1.25rem !important;
  }

  .is-size-6 {
    font-size: 1rem !important;
  }

  .is-size-7 {
    font-size: 0.75rem !important;
  }

  @media screen and (max-width: 768px) {
    .is-size-1-mobile {
      font-size: 3rem !important;
    }
    .is-size-2-mobile {
      font-size: 2.5rem !important;
    }
    .is-size-3-mobile {
      font-size: 2rem !important;
    }
    .is-size-4-mobile {
      font-size: 1.5rem !important;
    }
    .is-size-5-mobile {
      font-size: 1.25rem !important;
    }
    .is-size-6-mobile {
      font-size: 1rem !important;
    }
    .is-size-7-mobile {
      font-size: 0.75rem !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .is-size-1-tablet {
      font-size: 3rem !important;
    }
    .is-size-2-tablet {
      font-size: 2.5rem !important;
    }
    .is-size-3-tablet {
      font-size: 2rem !important;
    }
    .is-size-4-tablet {
      font-size: 1.5rem !important;
    }
    .is-size-5-tablet {
      font-size: 1.25rem !important;
    }
    .is-size-6-tablet {
      font-size: 1rem !important;
    }
    .is-size-7-tablet {
      font-size: 0.75rem !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .is-size-1-touch {
      font-size: 3rem !important;
    }
    .is-size-2-touch {
      font-size: 2.5rem !important;
    }
    .is-size-3-touch {
      font-size: 2rem !important;
    }
    .is-size-4-touch {
      font-size: 1.5rem !important;
    }
    .is-size-5-touch {
      font-size: 1.25rem !important;
    }
    .is-size-6-touch {
      font-size: 1rem !important;
    }
    .is-size-7-touch {
      font-size: 0.75rem !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .is-size-1-desktop {
      font-size: 3rem !important;
    }
    .is-size-2-desktop {
      font-size: 2.5rem !important;
    }
    .is-size-3-desktop {
      font-size: 2rem !important;
    }
    .is-size-4-desktop {
      font-size: 1.5rem !important;
    }
    .is-size-5-desktop {
      font-size: 1.25rem !important;
    }
    .is-size-6-desktop {
      font-size: 1rem !important;
    }
    .is-size-7-desktop {
      font-size: 0.75rem !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .is-size-1-widescreen {
      font-size: 3rem !important;
    }
    .is-size-2-widescreen {
      font-size: 2.5rem !important;
    }
    .is-size-3-widescreen {
      font-size: 2rem !important;
    }
    .is-size-4-widescreen {
      font-size: 1.5rem !important;
    }
    .is-size-5-widescreen {
      font-size: 1.25rem !important;
    }
    .is-size-6-widescreen {
      font-size: 1rem !important;
    }
    .is-size-7-widescreen {
      font-size: 0.75rem !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .is-size-1-fullhd {
      font-size: 3rem !important;
    }
    .is-size-2-fullhd {
      font-size: 2.5rem !important;
    }
    .is-size-3-fullhd {
      font-size: 2rem !important;
    }
    .is-size-4-fullhd {
      font-size: 1.5rem !important;
    }
    .is-size-5-fullhd {
      font-size: 1.25rem !important;
    }
    .is-size-6-fullhd {
      font-size: 1rem !important;
    }
    .is-size-7-fullhd {
      font-size: 0.75rem !important;
    }
  }

  .has-text-centered {
    text-align: center !important;
  }

  .has-text-justified {
    text-align: justify !important;
  }

  .has-text-left {
    text-align: left !important;
  }

  .has-text-right {
    text-align: right !important;
  }

  @media screen and (max-width: 768px) {
    .has-text-centered-mobile {
      text-align: center !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .has-text-centered-tablet {
      text-align: center !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .has-text-centered-tablet-only {
      text-align: center !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .has-text-centered-touch {
      text-align: center !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .has-text-centered-desktop {
      text-align: center !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .has-text-centered-desktop-only {
      text-align: center !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .has-text-centered-widescreen {
      text-align: center !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .has-text-centered-widescreen-only {
      text-align: center !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .has-text-centered-fullhd {
      text-align: center !important;
    }
  }

  @media screen and (max-width: 768px) {
    .has-text-justified-mobile {
      text-align: justify !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .has-text-justified-tablet {
      text-align: justify !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .has-text-justified-tablet-only {
      text-align: justify !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .has-text-justified-touch {
      text-align: justify !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .has-text-justified-desktop {
      text-align: justify !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .has-text-justified-desktop-only {
      text-align: justify !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .has-text-justified-widescreen {
      text-align: justify !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .has-text-justified-widescreen-only {
      text-align: justify !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .has-text-justified-fullhd {
      text-align: justify !important;
    }
  }

  @media screen and (max-width: 768px) {
    .has-text-left-mobile {
      text-align: left !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .has-text-left-tablet {
      text-align: left !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .has-text-left-tablet-only {
      text-align: left !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .has-text-left-touch {
      text-align: left !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .has-text-left-desktop {
      text-align: left !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .has-text-left-desktop-only {
      text-align: left !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .has-text-left-widescreen {
      text-align: left !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .has-text-left-widescreen-only {
      text-align: left !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .has-text-left-fullhd {
      text-align: left !important;
    }
  }

  @media screen and (max-width: 768px) {
    .has-text-right-mobile {
      text-align: right !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .has-text-right-tablet {
      text-align: right !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .has-text-right-tablet-only {
      text-align: right !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .has-text-right-touch {
      text-align: right !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .has-text-right-desktop {
      text-align: right !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .has-text-right-desktop-only {
      text-align: right !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .has-text-right-widescreen {
      text-align: right !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .has-text-right-widescreen-only {
      text-align: right !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .has-text-right-fullhd {
      text-align: right !important;
    }
  }

  .is-capitalized {
    text-transform: capitalize !important;
  }

  .is-lowercase {
    text-transform: lowercase !important;
  }

  .is-uppercase {
    text-transform: uppercase !important;
  }

  .is-italic {
    font-style: italic !important;
  }

  .is-underlined {
    text-decoration: underline !important;
  }

  .has-text-weight-light {
    font-weight: 300 !important;
  }

  .has-text-weight-normal {
    font-weight: 400 !important;
  }

  .has-text-weight-medium {
    font-weight: 500 !important;
  }

  .has-text-weight-semibold {
    font-weight: 600 !important;
  }

  .has-text-weight-bold {
    font-weight: 700 !important;
  }

  .is-family-primary {
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
  }

  .is-family-secondary {
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
  }

  .is-family-sans-serif {
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
  }

  .is-family-monospace {
    font-family: monospace !important;
  }

  .is-family-code {
    font-family: monospace !important;
  }

  .is-block {
    display: block !important;
  }

  @media screen and (max-width: 768px) {
    .is-block-mobile {
      display: block !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .is-block-tablet {
      display: block !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .is-block-tablet-only {
      display: block !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .is-block-touch {
      display: block !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .is-block-desktop {
      display: block !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .is-block-desktop-only {
      display: block !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .is-block-widescreen {
      display: block !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .is-block-widescreen-only {
      display: block !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .is-block-fullhd {
      display: block !important;
    }
  }

  .is-flex {
    display: flex !important;
  }

  @media screen and (max-width: 768px) {
    .is-flex-mobile {
      display: flex !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .is-flex-tablet {
      display: flex !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .is-flex-tablet-only {
      display: flex !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .is-flex-touch {
      display: flex !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .is-flex-desktop {
      display: flex !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .is-flex-desktop-only {
      display: flex !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .is-flex-widescreen {
      display: flex !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .is-flex-widescreen-only {
      display: flex !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .is-flex-fullhd {
      display: flex !important;
    }
  }

  .is-inline {
    display: inline !important;
  }

  @media screen and (max-width: 768px) {
    .is-inline-mobile {
      display: inline !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .is-inline-tablet {
      display: inline !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .is-inline-tablet-only {
      display: inline !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .is-inline-touch {
      display: inline !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .is-inline-desktop {
      display: inline !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .is-inline-desktop-only {
      display: inline !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .is-inline-widescreen {
      display: inline !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .is-inline-widescreen-only {
      display: inline !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .is-inline-fullhd {
      display: inline !important;
    }
  }

  .is-inline-block {
    display: inline-block !important;
  }

  @media screen and (max-width: 768px) {
    .is-inline-block-mobile {
      display: inline-block !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .is-inline-block-tablet {
      display: inline-block !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .is-inline-block-tablet-only {
      display: inline-block !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .is-inline-block-touch {
      display: inline-block !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .is-inline-block-desktop {
      display: inline-block !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .is-inline-block-desktop-only {
      display: inline-block !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .is-inline-block-widescreen {
      display: inline-block !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .is-inline-block-widescreen-only {
      display: inline-block !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .is-inline-block-fullhd {
      display: inline-block !important;
    }
  }

  .is-inline-flex {
    display: inline-flex !important;
  }

  @media screen and (max-width: 768px) {
    .is-inline-flex-mobile {
      display: inline-flex !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .is-inline-flex-tablet {
      display: inline-flex !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .is-inline-flex-tablet-only {
      display: inline-flex !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .is-inline-flex-touch {
      display: inline-flex !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .is-inline-flex-desktop {
      display: inline-flex !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .is-inline-flex-desktop-only {
      display: inline-flex !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .is-inline-flex-widescreen {
      display: inline-flex !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .is-inline-flex-widescreen-only {
      display: inline-flex !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .is-inline-flex-fullhd {
      display: inline-flex !important;
    }
  }

  .is-hidden {
    display: none !important;
  }

  .is-sr-only {
    border: none !important;
    clip: rect(0, 0, 0, 0) !important;
    height: 0.01em !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    white-space: nowrap !important;
    width: 0.01em !important;
  }

  @media screen and (max-width: 768px) {
    .is-hidden-mobile {
      display: none !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .is-hidden-tablet {
      display: none !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .is-hidden-tablet-only {
      display: none !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .is-hidden-touch {
      display: none !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .is-hidden-desktop {
      display: none !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .is-hidden-desktop-only {
      display: none !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .is-hidden-widescreen {
      display: none !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .is-hidden-widescreen-only {
      display: none !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .is-hidden-fullhd {
      display: none !important;
    }
  }

  .is-invisible {
    visibility: hidden !important;
  }

  @media screen and (max-width: 768px) {
    .is-invisible-mobile {
      visibility: hidden !important;
    }
  }

  @media screen and (min-width: 769px), print {
    .is-invisible-tablet {
      visibility: hidden !important;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .is-invisible-tablet-only {
      visibility: hidden !important;
    }
  }

  @media screen and (max-width: 1023px) {
    .is-invisible-touch {
      visibility: hidden !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .is-invisible-desktop {
      visibility: hidden !important;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .is-invisible-desktop-only {
      visibility: hidden !important;
    }
  }

  @media screen and (min-width: 1216px) {
    .is-invisible-widescreen {
      visibility: hidden !important;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .is-invisible-widescreen-only {
      visibility: hidden !important;
    }
  }

  @media screen and (min-width: 1408px) {
    .is-invisible-fullhd {
      visibility: hidden !important;
    }
  }

  /* Bulma Layout */
  .hero {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .hero .navbar {
    background: none;
  }

  .hero .tabs ul {
    border-bottom: none;
  }

  .hero.is-white {
    background-color: white;
    color: #0a0a0a;
  }

  .hero.is-white
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-white strong {
    color: inherit;
  }

  .hero.is-white .title {
    color: #0a0a0a;
  }

  .hero.is-white .subtitle {
    color: rgba(10, 10, 10, 0.9);
  }

  .hero.is-white .subtitle a:not(.button),
  .hero.is-white .subtitle strong {
    color: #0a0a0a;
  }

  @media screen and (max-width: 1023px) {
    .hero.is-white .navbar-menu {
      background-color: white;
    }
  }

  .hero.is-white .navbar-item,
  .hero.is-white .navbar-link {
    color: rgba(10, 10, 10, 0.7);
  }

  .hero.is-white a.navbar-item:hover,
  .hero.is-white a.navbar-item.is-active,
  .hero.is-white .navbar-link:hover,
  .hero.is-white .navbar-link.is-active {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }

  .hero.is-white .tabs a {
    color: #0a0a0a;
    opacity: 0.9;
  }

  .hero.is-white .tabs a:hover {
    opacity: 1;
  }

  .hero.is-white .tabs li.is-active a {
    color: white !important;
    opacity: 1;
  }

  .hero.is-white .tabs.is-boxed a,
  .hero.is-white .tabs.is-toggle a {
    color: #0a0a0a;
  }

  .hero.is-white .tabs.is-boxed a:hover,
  .hero.is-white .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-white .tabs.is-boxed li.is-active a,
  .hero.is-white .tabs.is-boxed li.is-active a:hover,
  .hero.is-white .tabs.is-toggle li.is-active a,
  .hero.is-white .tabs.is-toggle li.is-active a:hover {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    color: white;
  }

  .hero.is-white.is-bold {
    background-image: linear-gradient(
      141deg,
      #e6e6e6 0%,
      white 71%,
      white 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-white.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        #e6e6e6 0%,
        white 71%,
        white 100%
      );
    }
  }

  .hero.is-black {
    background-color: #0a0a0a;
    color: white;
  }

  .hero.is-black
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-black strong {
    color: inherit;
  }

  .hero.is-black .title {
    color: white;
  }

  .hero.is-black .subtitle {
    color: rgba(255, 255, 255, 0.9);
  }

  .hero.is-black .subtitle a:not(.button),
  .hero.is-black .subtitle strong {
    color: white;
  }

  @media screen and (max-width: 1023px) {
    .hero.is-black .navbar-menu {
      background-color: #0a0a0a;
    }
  }

  .hero.is-black .navbar-item,
  .hero.is-black .navbar-link {
    color: rgba(255, 255, 255, 0.7);
  }

  .hero.is-black a.navbar-item:hover,
  .hero.is-black a.navbar-item.is-active,
  .hero.is-black .navbar-link:hover,
  .hero.is-black .navbar-link.is-active {
    background-color: black;
    color: white;
  }

  .hero.is-black .tabs a {
    color: white;
    opacity: 0.9;
  }

  .hero.is-black .tabs a:hover {
    opacity: 1;
  }

  .hero.is-black .tabs li.is-active a {
    color: #0a0a0a !important;
    opacity: 1;
  }

  .hero.is-black .tabs.is-boxed a,
  .hero.is-black .tabs.is-toggle a {
    color: white;
  }

  .hero.is-black .tabs.is-boxed a:hover,
  .hero.is-black .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-black .tabs.is-boxed li.is-active a,
  .hero.is-black .tabs.is-boxed li.is-active a:hover,
  .hero.is-black .tabs.is-toggle li.is-active a,
  .hero.is-black .tabs.is-toggle li.is-active a:hover {
    background-color: white;
    border-color: white;
    color: #0a0a0a;
  }

  .hero.is-black.is-bold {
    background-image: linear-gradient(
      141deg,
      black 0%,
      #0a0a0a 71%,
      #181616 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-black.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        black 0%,
        #0a0a0a 71%,
        #181616 100%
      );
    }
  }

  .hero.is-light {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-light
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-light strong {
    color: inherit;
  }

  .hero.is-light .title {
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-light .subtitle {
    color: rgba(0, 0, 0, 0.9);
  }

  .hero.is-light .subtitle a:not(.button),
  .hero.is-light .subtitle strong {
    color: rgba(0, 0, 0, 0.7);
  }

  @media screen and (max-width: 1023px) {
    .hero.is-light .navbar-menu {
      background-color: whitesmoke;
    }
  }

  .hero.is-light .navbar-item,
  .hero.is-light .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-light a.navbar-item:hover,
  .hero.is-light a.navbar-item.is-active,
  .hero.is-light .navbar-link:hover,
  .hero.is-light .navbar-link.is-active {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-light .tabs a {
    color: rgba(0, 0, 0, 0.7);
    opacity: 0.9;
  }

  .hero.is-light .tabs a:hover {
    opacity: 1;
  }

  .hero.is-light .tabs li.is-active a {
    color: whitesmoke !important;
    opacity: 1;
  }

  .hero.is-light .tabs.is-boxed a,
  .hero.is-light .tabs.is-toggle a {
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-light .tabs.is-boxed a:hover,
  .hero.is-light .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-light .tabs.is-boxed li.is-active a,
  .hero.is-light .tabs.is-boxed li.is-active a:hover,
  .hero.is-light .tabs.is-toggle li.is-active a,
  .hero.is-light .tabs.is-toggle li.is-active a:hover {
    background-color: rgba(0, 0, 0, 0.7);
    border-color: rgba(0, 0, 0, 0.7);
    color: whitesmoke;
  }

  .hero.is-light.is-bold {
    background-image: linear-gradient(
      141deg,
      #dfd8d9 0%,
      whitesmoke 71%,
      white 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-light.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        #dfd8d9 0%,
        whitesmoke 71%,
        white 100%
      );
    }
  }

  .hero.is-dark {
    background-color: #363636;
    color: #fff;
  }

  .hero.is-dark
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-dark strong {
    color: inherit;
  }

  .hero.is-dark .title {
    color: #fff;
  }

  .hero.is-dark .subtitle {
    color: rgba(255, 255, 255, 0.9);
  }

  .hero.is-dark .subtitle a:not(.button),
  .hero.is-dark .subtitle strong {
    color: #fff;
  }

  @media screen and (max-width: 1023px) {
    .hero.is-dark .navbar-menu {
      background-color: #363636;
    }
  }

  .hero.is-dark .navbar-item,
  .hero.is-dark .navbar-link {
    color: rgba(255, 255, 255, 0.7);
  }

  .hero.is-dark a.navbar-item:hover,
  .hero.is-dark a.navbar-item.is-active,
  .hero.is-dark .navbar-link:hover,
  .hero.is-dark .navbar-link.is-active {
    background-color: #292929;
    color: #fff;
  }

  .hero.is-dark .tabs a {
    color: #fff;
    opacity: 0.9;
  }

  .hero.is-dark .tabs a:hover {
    opacity: 1;
  }

  .hero.is-dark .tabs li.is-active a {
    color: #363636 !important;
    opacity: 1;
  }

  .hero.is-dark .tabs.is-boxed a,
  .hero.is-dark .tabs.is-toggle a {
    color: #fff;
  }

  .hero.is-dark .tabs.is-boxed a:hover,
  .hero.is-dark .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-dark .tabs.is-boxed li.is-active a,
  .hero.is-dark .tabs.is-boxed li.is-active a:hover,
  .hero.is-dark .tabs.is-toggle li.is-active a,
  .hero.is-dark .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #363636;
  }

  .hero.is-dark.is-bold {
    background-image: linear-gradient(
      141deg,
      #1f191a 0%,
      #363636 71%,
      #46403f 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-dark.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        #1f191a 0%,
        #363636 71%,
        #46403f 100%
      );
    }
  }

  .hero.is-primary {
    background-color: #00d1b2;
    color: #fff;
  }

  .hero.is-primary
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-primary strong {
    color: inherit;
  }

  .hero.is-primary .title {
    color: #fff;
  }

  .hero.is-primary .subtitle {
    color: rgba(255, 255, 255, 0.9);
  }

  .hero.is-primary .subtitle a:not(.button),
  .hero.is-primary .subtitle strong {
    color: #fff;
  }

  @media screen and (max-width: 1023px) {
    .hero.is-primary .navbar-menu {
      background-color: #00d1b2;
    }
  }

  .hero.is-primary .navbar-item,
  .hero.is-primary .navbar-link {
    color: rgba(255, 255, 255, 0.7);
  }

  .hero.is-primary a.navbar-item:hover,
  .hero.is-primary a.navbar-item.is-active,
  .hero.is-primary .navbar-link:hover,
  .hero.is-primary .navbar-link.is-active {
    background-color: #00b89c;
    color: #fff;
  }

  .hero.is-primary .tabs a {
    color: #fff;
    opacity: 0.9;
  }

  .hero.is-primary .tabs a:hover {
    opacity: 1;
  }

  .hero.is-primary .tabs li.is-active a {
    color: #00d1b2 !important;
    opacity: 1;
  }

  .hero.is-primary .tabs.is-boxed a,
  .hero.is-primary .tabs.is-toggle a {
    color: #fff;
  }

  .hero.is-primary .tabs.is-boxed a:hover,
  .hero.is-primary .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-primary .tabs.is-boxed li.is-active a,
  .hero.is-primary .tabs.is-boxed li.is-active a:hover,
  .hero.is-primary .tabs.is-toggle li.is-active a,
  .hero.is-primary .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #00d1b2;
  }

  .hero.is-primary.is-bold {
    background-image: linear-gradient(
      141deg,
      #009e6c 0%,
      #00d1b2 71%,
      #00e7eb 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-primary.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        #009e6c 0%,
        #00d1b2 71%,
        #00e7eb 100%
      );
    }
  }

  .hero.is-link {
    background-color: #485fc7;
    color: #fff;
  }

  .hero.is-link
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-link strong {
    color: inherit;
  }

  .hero.is-link .title {
    color: #fff;
  }

  .hero.is-link .subtitle {
    color: rgba(255, 255, 255, 0.9);
  }

  .hero.is-link .subtitle a:not(.button),
  .hero.is-link .subtitle strong {
    color: #fff;
  }

  @media screen and (max-width: 1023px) {
    .hero.is-link .navbar-menu {
      background-color: #485fc7;
    }
  }

  .hero.is-link .navbar-item,
  .hero.is-link .navbar-link {
    color: rgba(255, 255, 255, 0.7);
  }

  .hero.is-link a.navbar-item:hover,
  .hero.is-link a.navbar-item.is-active,
  .hero.is-link .navbar-link:hover,
  .hero.is-link .navbar-link.is-active {
    background-color: #3a51bb;
    color: #fff;
  }

  .hero.is-link .tabs a {
    color: #fff;
    opacity: 0.9;
  }

  .hero.is-link .tabs a:hover {
    opacity: 1;
  }

  .hero.is-link .tabs li.is-active a {
    color: #485fc7 !important;
    opacity: 1;
  }

  .hero.is-link .tabs.is-boxed a,
  .hero.is-link .tabs.is-toggle a {
    color: #fff;
  }

  .hero.is-link .tabs.is-boxed a:hover,
  .hero.is-link .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-link .tabs.is-boxed li.is-active a,
  .hero.is-link .tabs.is-boxed li.is-active a:hover,
  .hero.is-link .tabs.is-toggle li.is-active a,
  .hero.is-link .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #485fc7;
  }

  .hero.is-link.is-bold {
    background-image: linear-gradient(
      141deg,
      #2959b3 0%,
      #485fc7 71%,
      #5658d2 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-link.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        #2959b3 0%,
        #485fc7 71%,
        #5658d2 100%
      );
    }
  }

  .hero.is-info {
    background-color: #3e8ed0;
    color: #fff;
  }

  .hero.is-info
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-info strong {
    color: inherit;
  }

  .hero.is-info .title {
    color: #fff;
  }

  .hero.is-info .subtitle {
    color: rgba(255, 255, 255, 0.9);
  }

  .hero.is-info .subtitle a:not(.button),
  .hero.is-info .subtitle strong {
    color: #fff;
  }

  @media screen and (max-width: 1023px) {
    .hero.is-info .navbar-menu {
      background-color: #3e8ed0;
    }
  }

  .hero.is-info .navbar-item,
  .hero.is-info .navbar-link {
    color: rgba(255, 255, 255, 0.7);
  }

  .hero.is-info a.navbar-item:hover,
  .hero.is-info a.navbar-item.is-active,
  .hero.is-info .navbar-link:hover,
  .hero.is-info .navbar-link.is-active {
    background-color: #3082c5;
    color: #fff;
  }

  .hero.is-info .tabs a {
    color: #fff;
    opacity: 0.9;
  }

  .hero.is-info .tabs a:hover {
    opacity: 1;
  }

  .hero.is-info .tabs li.is-active a {
    color: #3e8ed0 !important;
    opacity: 1;
  }

  .hero.is-info .tabs.is-boxed a,
  .hero.is-info .tabs.is-toggle a {
    color: #fff;
  }

  .hero.is-info .tabs.is-boxed a:hover,
  .hero.is-info .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-info .tabs.is-boxed li.is-active a,
  .hero.is-info .tabs.is-boxed li.is-active a:hover,
  .hero.is-info .tabs.is-toggle li.is-active a,
  .hero.is-info .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #3e8ed0;
  }

  .hero.is-info.is-bold {
    background-image: linear-gradient(
      141deg,
      #208fbc 0%,
      #3e8ed0 71%,
      #4d83db 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-info.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        #208fbc 0%,
        #3e8ed0 71%,
        #4d83db 100%
      );
    }
  }

  .hero.is-success {
    background-color: #48c78e;
    color: #fff;
  }

  .hero.is-success
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-success strong {
    color: inherit;
  }

  .hero.is-success .title {
    color: #fff;
  }

  .hero.is-success .subtitle {
    color: rgba(255, 255, 255, 0.9);
  }

  .hero.is-success .subtitle a:not(.button),
  .hero.is-success .subtitle strong {
    color: #fff;
  }

  @media screen and (max-width: 1023px) {
    .hero.is-success .navbar-menu {
      background-color: #48c78e;
    }
  }

  .hero.is-success .navbar-item,
  .hero.is-success .navbar-link {
    color: rgba(255, 255, 255, 0.7);
  }

  .hero.is-success a.navbar-item:hover,
  .hero.is-success a.navbar-item.is-active,
  .hero.is-success .navbar-link:hover,
  .hero.is-success .navbar-link.is-active {
    background-color: #3abb81;
    color: #fff;
  }

  .hero.is-success .tabs a {
    color: #fff;
    opacity: 0.9;
  }

  .hero.is-success .tabs a:hover {
    opacity: 1;
  }

  .hero.is-success .tabs li.is-active a {
    color: #48c78e !important;
    opacity: 1;
  }

  .hero.is-success .tabs.is-boxed a,
  .hero.is-success .tabs.is-toggle a {
    color: #fff;
  }

  .hero.is-success .tabs.is-boxed a:hover,
  .hero.is-success .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-success .tabs.is-boxed li.is-active a,
  .hero.is-success .tabs.is-boxed li.is-active a:hover,
  .hero.is-success .tabs.is-toggle li.is-active a,
  .hero.is-success .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #48c78e;
  }

  .hero.is-success.is-bold {
    background-image: linear-gradient(
      141deg,
      #29b35e 0%,
      #48c78e 71%,
      #56d2af 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-success.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        #29b35e 0%,
        #48c78e 71%,
        #56d2af 100%
      );
    }
  }

  .hero.is-warning {
    background-color: #ffe08a;
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-warning
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-warning strong {
    color: inherit;
  }

  .hero.is-warning .title {
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-warning .subtitle {
    color: rgba(0, 0, 0, 0.9);
  }

  .hero.is-warning .subtitle a:not(.button),
  .hero.is-warning .subtitle strong {
    color: rgba(0, 0, 0, 0.7);
  }

  @media screen and (max-width: 1023px) {
    .hero.is-warning .navbar-menu {
      background-color: #ffe08a;
    }
  }

  .hero.is-warning .navbar-item,
  .hero.is-warning .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-warning a.navbar-item:hover,
  .hero.is-warning a.navbar-item.is-active,
  .hero.is-warning .navbar-link:hover,
  .hero.is-warning .navbar-link.is-active {
    background-color: #ffd970;
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-warning .tabs a {
    color: rgba(0, 0, 0, 0.7);
    opacity: 0.9;
  }

  .hero.is-warning .tabs a:hover {
    opacity: 1;
  }

  .hero.is-warning .tabs li.is-active a {
    color: #ffe08a !important;
    opacity: 1;
  }

  .hero.is-warning .tabs.is-boxed a,
  .hero.is-warning .tabs.is-toggle a {
    color: rgba(0, 0, 0, 0.7);
  }

  .hero.is-warning .tabs.is-boxed a:hover,
  .hero.is-warning .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-warning .tabs.is-boxed li.is-active a,
  .hero.is-warning .tabs.is-boxed li.is-active a:hover,
  .hero.is-warning .tabs.is-toggle li.is-active a,
  .hero.is-warning .tabs.is-toggle li.is-active a:hover {
    background-color: rgba(0, 0, 0, 0.7);
    border-color: rgba(0, 0, 0, 0.7);
    color: #ffe08a;
  }

  .hero.is-warning.is-bold {
    background-image: linear-gradient(
      141deg,
      #ffb657 0%,
      #ffe08a 71%,
      #fff6a3 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-warning.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        #ffb657 0%,
        #ffe08a 71%,
        #fff6a3 100%
      );
    }
  }

  .hero.is-danger {
    background-color: #f14668;
    color: #fff;
  }

  .hero.is-danger
    a:not(.button):not(.dropdown-item):not(.tag):not(
      .pagination-link.is-current
    ),
  .hero.is-danger strong {
    color: inherit;
  }

  .hero.is-danger .title {
    color: #fff;
  }

  .hero.is-danger .subtitle {
    color: rgba(255, 255, 255, 0.9);
  }

  .hero.is-danger .subtitle a:not(.button),
  .hero.is-danger .subtitle strong {
    color: #fff;
  }

  @media screen and (max-width: 1023px) {
    .hero.is-danger .navbar-menu {
      background-color: #f14668;
    }
  }

  .hero.is-danger .navbar-item,
  .hero.is-danger .navbar-link {
    color: rgba(255, 255, 255, 0.7);
  }

  .hero.is-danger a.navbar-item:hover,
  .hero.is-danger a.navbar-item.is-active,
  .hero.is-danger .navbar-link:hover,
  .hero.is-danger .navbar-link.is-active {
    background-color: #ef2e55;
    color: #fff;
  }

  .hero.is-danger .tabs a {
    color: #fff;
    opacity: 0.9;
  }

  .hero.is-danger .tabs a:hover {
    opacity: 1;
  }

  .hero.is-danger .tabs li.is-active a {
    color: #f14668 !important;
    opacity: 1;
  }

  .hero.is-danger .tabs.is-boxed a,
  .hero.is-danger .tabs.is-toggle a {
    color: #fff;
  }

  .hero.is-danger .tabs.is-boxed a:hover,
  .hero.is-danger .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, 0.1);
  }

  .hero.is-danger .tabs.is-boxed li.is-active a,
  .hero.is-danger .tabs.is-boxed li.is-active a:hover,
  .hero.is-danger .tabs.is-toggle li.is-active a,
  .hero.is-danger .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #f14668;
  }

  .hero.is-danger.is-bold {
    background-image: linear-gradient(
      141deg,
      #fa0a62 0%,
      #f14668 71%,
      #f7595f 100%
    );
  }

  @media screen and (max-width: 768px) {
    .hero.is-danger.is-bold .navbar-menu {
      background-image: linear-gradient(
        141deg,
        #fa0a62 0%,
        #f14668 71%,
        #f7595f 100%
      );
    }
  }

  .hero.is-small .hero-body {
    padding: 1.5rem;
  }

  @media screen and (min-width: 769px), print {
    .hero.is-medium .hero-body {
      padding: 9rem 4.5rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .hero.is-large .hero-body {
      padding: 18rem 6rem;
    }
  }

  .hero.is-halfheight .hero-body,
  .hero.is-fullheight .hero-body,
  .hero.is-fullheight-with-navbar .hero-body {
    align-items: center;
    display: flex;
  }

  .hero.is-halfheight .hero-body > .container,
  .hero.is-fullheight .hero-body > .container,
  .hero.is-fullheight-with-navbar .hero-body > .container {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .hero.is-halfheight {
    min-height: 50vh;
  }

  .hero.is-fullheight {
    min-height: 100vh;
  }

  .hero-video {
    overflow: hidden;
  }

  .hero-video video {
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  .hero-video.is-transparent {
    opacity: 0.3;
  }

  @media screen and (max-width: 768px) {
    .hero-video {
      display: none;
    }
  }

  .hero-buttons {
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .hero-buttons .button {
      display: flex;
    }
    .hero-buttons .button:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }

  @media screen and (min-width: 769px), print {
    .hero-buttons {
      display: flex;
      justify-content: center;
    }
    .hero-buttons .button:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .hero-head,
  .hero-foot {
    flex-grow: 0;
    flex-shrink: 0;
  }

  .hero-body {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3rem 1.5rem;
  }

  @media screen and (min-width: 769px), print {
    .hero-body {
      padding: 3rem 3rem;
    }
  }

  .section {
    padding: 3rem 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    .section {
      padding: 3rem 3rem;
    }
    .section.is-medium {
      padding: 9rem 4.5rem;
    }
    .section.is-large {
      padding: 18rem 6rem;
    }
  }

  .footer {
    background-color: #fafafa;
    padding: 3rem 1.5rem 6rem;
  }
  /*# sourceMappingURL=bulma.css.map */
`;

const RUNS_STORAGE_KEY = "neko-punch-runs";
// === main ===
let NekoPunch = class NekoPunch extends s {
    constructor() {
        super(...arguments);
        // === tab state ===
        this.activeTab = "Execute";
        // === state for run form ===
        this.runName = "";
        this.wfEngine = "";
        this.wfAttachments = [];
        this.wfAttUploadFileName = "No file selected";
        this.wfAttUploadTarget = "";
        this.wfAttFetchUrl = "";
        this.wfAttFetchTarget = "";
        this.wfParams = "{}";
        this.wfEngineParams = "{}";
        this.runs = [];
        this.runLogs = {};
        this.executeLoading = false;
    }
    changeTab(tab) {
        this.activeTab = tab;
    }
    // === computed properties ===
    get wfName() {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.workflow) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : "";
    }
    get wfVersion() {
        var _a, _b, _c, _d;
        return (_d = (_c = (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.workflow) === null || _b === void 0 ? void 0 : _b.language) === null || _c === void 0 ? void 0 : _c.version) !== null && _d !== void 0 ? _d : "";
    }
    get wfLicense() {
        var _a, _b;
        return (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.license) !== null && _b !== void 0 ? _b : "";
    }
    get wfReadme() {
        var _a, _b;
        return (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.workflow.readme) !== null && _b !== void 0 ? _b : "";
    }
    get wfType() {
        var _a, _b, _c, _d;
        return (_d = (_c = (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.workflow) === null || _b === void 0 ? void 0 : _b.language) === null || _c === void 0 ? void 0 : _c.type) !== null && _d !== void 0 ? _d : "CWL";
    }
    get wfTypeVersion() {
        var _a, _b, _c, _d;
        return (_d = (_c = (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.workflow) === null || _b === void 0 ? void 0 : _b.language) === null || _c === void 0 ? void 0 : _c.version) !== null && _d !== void 0 ? _d : "v1.0";
    }
    get wfEngines() {
        var _a, _b, _c;
        return (_c = Object.keys((_b = (_a = this.serviceInfo) === null || _a === void 0 ? void 0 : _a.workflow_engine_versions) !== null && _b !== void 0 ? _b : {})) !== null && _c !== void 0 ? _c : [];
    }
    get wfUrl() {
        var _a, _b, _c;
        const primaryFiles = (_c = (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.workflow) === null || _b === void 0 ? void 0 : _b.files.filter((file) => file.type === "primary")) !== null && _c !== void 0 ? _c : [];
        return primaryFiles.length !== 0 ? primaryFiles[0].url : "";
    }
    // === lifecycle ===
    async connectedCallback() {
        super.connectedCallback();
        // Check if the required attributes are set
        if (!this.wesLocation) {
            this.globalError =
                'The attribute "sapporo-location" is required, please set it as <neko-punch sapporo-location="http://localhost:1122">';
            return;
        }
        if (!this.yevisMetadataUrl) {
            this.globalError =
                "The attribute 'yevis-metadata-url' is required, please set it as <neko-punch yevis-metadata-url='https://raw.githubusercontent.com/sapporo-wes/yevis-cli/main/tests/test-metadata-CWL-validated.yml'>";
            return;
        }
        await Promise.all([this.getServiceInfo(), this.readYevisMetadata()]);
        this.initializeForm();
        this.loadRunsFromLocalStorage();
        if (this.runs.length !== 0) {
            const latestRun = this.runs[0];
            // for Result tab
            this.selectedRun = latestRun;
            this.fetchRunLog(latestRun);
        }
    }
    async getServiceInfo() {
        try {
            const res = await fetch(`${this.wesLocation}/service-info`);
            if (!res.ok) {
                throw new Error();
            }
            this.serviceInfo = await res.json();
        }
        catch (e) {
            this.globalError =
                "Failed to fetch service-info from Sapporo-WES, please check the Sapporo-WES location.";
        }
    }
    async readYevisMetadata() {
        try {
            const res = await fetch(`${this.yevisMetadataUrl}`);
            if (!res.ok) {
                throw new Error();
            }
            // Yevis metadata is sometimes in yaml format
            const metadata = await res.text();
            const parsedMetadata = jsYaml.load(metadata);
            this.yevisMetadata = parsedMetadata;
        }
        catch (e) {
            this.globalError =
                "Failed to fetch Yevis metadata, please check the Yevis metadata URL.";
        }
    }
    initializeForm() {
        this.setInitialRunName();
        this.setInitialWfEngine();
        this.setInitialWfAttachments();
        this.setInitialWfParams();
        this.setInitialWfEngineParams();
    }
    setInitialRunName() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0 based in JavaScript
        const day = String(now.getDate()).padStart(2, "0");
        const hour = String(now.getHours()).padStart(2, "0");
        const minute = String(now.getMinutes()).padStart(2, "0");
        this.runName = `Run - ${year}/${month}/${day} ${hour}:${minute}`;
    }
    setInitialWfEngine() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const DEFAULT_WF_ENGINE = "cwltool";
        this.wfEngine = DEFAULT_WF_ENGINE;
        if (this.workflowEngineAttr === undefined) {
            if (this.wfType !== undefined) {
                if (this.wfType === "CWL") {
                    this.wfEngine =
                        (_b = (_a = this.wfEngines) === null || _a === void 0 ? void 0 : _a.find((engine) => engine.toLocaleLowerCase().includes("cwltool"))) !== null && _b !== void 0 ? _b : DEFAULT_WF_ENGINE;
                }
                else if (this.wfType === "WDL") {
                    this.wfEngine =
                        (_d = (_c = this.wfEngines) === null || _c === void 0 ? void 0 : _c.find((engine) => engine.toLocaleLowerCase().includes("cromwell"))) !== null && _d !== void 0 ? _d : DEFAULT_WF_ENGINE;
                }
                else if (this.wfType === "NFL") {
                    this.wfEngine =
                        (_f = (_e = this.wfEngines) === null || _e === void 0 ? void 0 : _e.find((engine) => engine.toLocaleLowerCase().includes("nextflow"))) !== null && _f !== void 0 ? _f : DEFAULT_WF_ENGINE;
                }
                else if (this.wfType === "SMK") {
                    this.wfEngine =
                        (_h = (_g = this.wfEngines) === null || _g === void 0 ? void 0 : _g.find((engine) => engine.toLocaleLowerCase().includes("snakemake"))) !== null && _h !== void 0 ? _h : DEFAULT_WF_ENGINE;
                }
            }
        }
        else {
            this.wfEngine = this.workflowEngineAttr;
        }
    }
    setInitialWfAttachments() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        // Set the workflow attachments from the Yevis metadata
        const secondaryFiles = (_c = (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.workflow) === null || _b === void 0 ? void 0 : _b.files.filter((file) => file.type === "secondary")) !== null && _c !== void 0 ? _c : [];
        const otherFiles = (_h = (_g = (_f = (_e = (_d = this.yevisMetadata) === null || _d === void 0 ? void 0 : _d.workflow) === null || _e === void 0 ? void 0 : _e.testing) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.files.filter((file) => file.type === "other")) !== null && _h !== void 0 ? _h : [];
        this.wfAttachments = [
            ...secondaryFiles.map((file) => ({
                url: file.url,
                target: file.target,
                type: "fetch",
                secondary: true,
                other: false,
            })),
            ...otherFiles.map((file) => ({
                url: file.url,
                target: file.target,
                type: "fetch",
                secondary: false,
                other: true,
            })),
        ];
    }
    setInitialWfParams() {
        var _a, _b, _c, _d, _e;
        if (this.wfParamsCache === undefined) {
            const wfParamsFile = (_d = (_c = (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.workflow) === null || _b === void 0 ? void 0 : _b.testing) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.files.find((file) => file.type === "wf_params");
            if (wfParamsFile !== undefined) {
                fetch(wfParamsFile.url)
                    .then((res) => {
                    if (res.ok) {
                        return res.text();
                    }
                    else {
                        throw new Error();
                    }
                })
                    .then((text) => {
                    this.wfParamsCache = text;
                    this.wfParams = text;
                })
                    .catch(() => {
                    this.apiError = `Failed to fetch "wf_params" file content from ${wfParamsFile.url}, please check the Yevis metadata.`;
                });
            }
        }
        else {
            this.wfParams = (_e = this.wfParamsCache) !== null && _e !== void 0 ? _e : "{}";
        }
    }
    setInitialWfEngineParams() {
        var _a, _b, _c, _d, _e;
        if (this.wfEngineParamsCache === undefined) {
            const wfEngineParamsFile = (_d = (_c = (_b = (_a = this.yevisMetadata) === null || _a === void 0 ? void 0 : _a.workflow) === null || _b === void 0 ? void 0 : _b.testing) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.files.find((file) => file.type === "wf_engine_params");
            if (wfEngineParamsFile !== undefined) {
                fetch(wfEngineParamsFile.url)
                    .then((res) => {
                    if (res.ok) {
                        return res.text();
                    }
                    else {
                        throw new Error();
                    }
                })
                    .then((text) => {
                    this.wfEngineParamsCache = text;
                    this.wfEngineParams = text;
                })
                    .catch(() => {
                    this.apiError = `Failed to fetch "wf_engine_params" file content from ${wfEngineParamsFile.url}, please check the Yevis metadata.`;
                });
            }
        }
        else {
            this.wfEngineParams = (_e = this.wfEngineParamsCache) !== null && _e !== void 0 ? _e : "{}";
        }
    }
    loadRunsFromLocalStorage() {
        // Get the previous runs from the local storage
        const runs = localStorage.getItem(RUNS_STORAGE_KEY);
        if (runs) {
            this.runs = JSON.parse(runs);
        }
    }
    // === event handlers for execute form ===
    inputRunName(e) {
        // Set the run name
        const target = e.target;
        this.runName = target.value;
    }
    deleteAttachment(ind) {
        // Delete the workflow attachment
        this.wfAttachments = this.wfAttachments.filter((_, i) => i !== ind);
    }
    attachFile(e) {
        var _a;
        // Attach a upload file as a workflow attachment
        const target = e.target;
        const file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file !== undefined) {
            this.wfAttUploadFile = file;
            this.wfAttUploadFileName = file.name;
            this.wfAttUploadTarget = file.name;
        }
    }
    inputUploadFileTarget(e) {
        // Set the target of the upload file
        const target = e.target;
        this.wfAttUploadTarget = target.value;
    }
    addUploadFile() {
        // Add the upload file to the workflow attachments (button)
        if (this.wfAttUploadFile !== undefined && this.wfAttUploadTarget !== "") {
            this.wfAttachments = [
                ...this.wfAttachments,
                {
                    target: this.wfAttUploadTarget,
                    type: "upload",
                    file: this.wfAttUploadFile,
                    secondary: false,
                    other: false,
                },
            ];
            this.wfAttUploadFile = undefined;
            this.wfAttUploadFileName = "No file selected";
            this.wfAttUploadTarget = "";
        }
    }
    inputFetchFileUrl(e) {
        var _a;
        // Set the url of the fetch file
        const target = e.target;
        this.wfAttFetchUrl = target.value;
        const url = new URL(this.wfAttFetchUrl);
        this.wfAttFetchTarget = (_a = url.pathname.split("/").pop()) !== null && _a !== void 0 ? _a : "";
    }
    inputFetchFileTarget(e) {
        // Set the target of the fetch file
        const target = e.target;
        this.wfAttFetchTarget = target.value;
    }
    addFetchFile() {
        // Add the fetch file to the workflow attachments (button)
        if (this.wfAttFetchUrl !== "" && this.wfAttFetchTarget !== "") {
            this.wfAttachments = [
                ...this.wfAttachments,
                {
                    target: this.wfAttFetchTarget,
                    type: "fetch",
                    url: this.wfAttFetchUrl,
                    secondary: false,
                    other: false,
                },
            ];
            this.wfAttFetchUrl = "";
            this.wfAttFetchTarget = "";
        }
    }
    inputWfParams(e) {
        // Set the workflow parameters
        const target = e.target;
        this.wfParams = target.value;
    }
    // === Execute workflow (POST /runs) ===
    executeWorkflow() {
        const formData = new FormData();
        formData.append("workflow_params", this.wfParams);
        formData.append("workflow_type", this.wfType);
        formData.append("workflow_type_version", this.wfTypeVersion);
        formData.append("workflow_engine_name", this.wfEngine);
        formData.append("workflow_engine_parameters", this.wfEngineParams);
        formData.append("workflow_url", this.wfUrl);
        const attachmentsArr = [];
        for (const attachment of this.wfAttachments) {
            if (attachment.type === "upload") {
                formData.append("workflow_attachment", attachment.file, attachment.target);
            }
            else if (attachment.type === "fetch") {
                attachmentsArr.push({
                    file_name: attachment.target,
                    file_url: attachment.url,
                });
            }
        }
        if (attachmentsArr.length !== 0) {
            formData.append("workflow_attachment", JSON.stringify(attachmentsArr));
        }
        this.executeLoading = true;
        fetch(`${this.wesLocation}/runs`, {
            method: "POST",
            body: formData,
        })
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error();
            }
        })
            .then((json) => {
            const runId = json.run_id;
            const run = { id: runId, name: this.runName };
            this.latestRun = run;
            this.runs = [run, ...this.runs];
            this.selectedRun = run;
            this.fetchRunLog(run);
            localStorage.setItem(RUNS_STORAGE_KEY, JSON.stringify(this.runs));
            this.initializeForm();
            this.executeLoading = false;
        })
            .catch((e) => {
            this.apiError = `Failed to execute workflow with the following error: ${e}`;
            this.executeLoading = false;
        });
    }
    // === functions for result tab ===
    selectRun(e) {
        const target = e.target;
        const run = this.runs.find((run) => run.name === target.value);
        this.selectedRun = run;
        if (run !== undefined) {
            this.fetchRunLog(run);
        }
    }
    fetchRunLog(run) {
        fetch(`${this.wesLocation}/runs/${run.id}`)
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error();
            }
        })
            .then((json) => {
            var _a, _b, _c, _d, _e, _f;
            const start_time = (_b = (_a = json.run_log) === null || _a === void 0 ? void 0 : _a.start_time) !== null && _b !== void 0 ? _b : "";
            const end_time = (_d = (_c = json.run_log) === null || _c === void 0 ? void 0 : _c.end_time) !== null && _d !== void 0 ? _d : "";
            const stdout = typeof ((_e = json.run_log) === null || _e === void 0 ? void 0 : _e.stdout) === "string"
                ? json.run_log.stdout
                : JSON.stringify(json.run_log.stdout, null, 2);
            const stderr = typeof ((_f = json.run_log) === null || _f === void 0 ? void 0 : _f.stderr) === "string"
                ? json.run_log.stderr
                : JSON.stringify(json.run_log.stderr, null, 2);
            this.runLogs[run.id] = {
                workflow_params: json.request.workflow_params,
                start_time,
                end_time,
                stdout,
                stderr,
                state: json.state,
                outputs: json.outputs,
            };
            this.requestUpdate();
        })
            .catch((e) => {
            this.apiError = `Failed to fetch run log with the following error: ${e}`;
        });
    }
    removeRun(run) {
        var _a;
        if (run.id === ((_a = this.latestRun) === null || _a === void 0 ? void 0 : _a.id)) {
            this.latestRun = undefined;
        }
        this.runs = this.runs.filter((r) => r.id !== run.id);
        const latestRun = this.runs[0];
        this.selectedRun = latestRun;
        this.fetchRunLog(latestRun);
        localStorage.setItem(RUNS_STORAGE_KEY, JSON.stringify(this.runs));
    }
    get selectedRunLog() {
        var _a, _b;
        return this.runLogs[(_b = (_a = this.selectedRun) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : ""];
    }
    // === render ===
    contentRender() {
        return x `
      <div class="tabs is-boxed">
        <ul>
          <li
            class="${this.activeTab === "Execute" ? "is-active" : ""}"
            @click="${() => this.changeTab("Execute")}"
          >
            <a style="width: 90px">
              <span style="padding-right: 4px; height: 18px;">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="${mdiRocketLaunchOutline}"
                    fill="${this.activeTab === "Execute"
            ? "hsl(217, 71%, 53%)"
            : "#4a4a4a"}"
                  />
                </svg>
              </span>
              <span
                style="color: ${this.activeTab === "Execute"
            ? "hsl(217, 71%, 53%)"
            : "#4a4a4a"}"
                >Execute</span
              >
            </a>
          </li>
          <li
            class="${this.activeTab === "Result" ? "is-active" : ""}"
            @click="${() => this.changeTab("Result")}"
          >
            <a style="width: 90px">
              <span style="padding-right: 4px; height: 18px;">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="${mdiChartBoxOutline}"
                    fill="${this.activeTab === "Result"
            ? "hsl(217, 71%, 53%)"
            : "#4a4a4a"}"
                  />
                </svg>
              </span>
              <span
                style="color: ${this.activeTab === "Result"
            ? "hsl(217, 71%, 53%)"
            : "#4a4a4a"}"
                >Result</span
              >
            </a>
          </li>
        </ul>
      </div>
      ${this.activeTab === "Execute"
            ? this.executeTabRender()
            : this.resultTabRender()}
    `;
    }
    executeTabRender() {
        var _a;
        return x `
      <div class="block" style="margin-left: 20px; margin-right: 20px;">
        <div class="block">
          <label class="label">Run Name</label>
          <input
            class="input is-info"
            type="text"
            placeholder="Run Name"
            .value="${this.runName}"
            @input="${this.inputRunName}"
            style="box-sizing: border-box; max-width: 100%;"
          />
        </div>

        <div class="block flex-columns">
          <label class="label">Workflow Attachment</label>
          <div
            class="block"
            style="display: flex-columns; border: 1px solid #dbdbdb; border-radius: 4px;"
          >
            ${this.wfAttachments.map((file, i) => {
            return x `
                <div
                  class="attach-child code-font"
                  style="padding: 8px 12px; display: flex; justify-content: space-between;"
                >
                  <div>
                    ${file.target}
                    ${file.other
                ? x `<span class="tag is-light is-rounded"
                          >Pre-Defined Test Data</span
                        >`
                : x ``}
                  </div>
                  ${!file.secondary
                ? x `
                        <a
                          class="tag is-danger is-light"
                          @click=${() => this.deleteAttachment(i)}
                          style="width: 36px;"
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18">
                            <path
                              d="${mdiDeleteOutline}"
                              fill="hsl(348, 86%, 43%)"
                            />
                          </svg>
                        </a>
                      `
                : x ``}
                </div>
              `;
        })}
          </div>

          <div
            style="display: grid; grid-template-columns: 1fr 3fr 3fr 1fr; grid-gap: 20px; margin-bottom: 10px;"
          >
            <div
              class="label"
              style="align-self: center; margin-bottom: 0; margin-left: 40px; font-size: 14px; width: 80px;"
            >
              Local
            </div>
            <div class="file">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  @change="${this.attachFile}"
                />
                <span class="file-cta" style="height: 24px;">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style="margin-right: 4px"
                  >
                    <path d="${mdiFileUploadOutline}" fill="#4a4a4a" />
                  </svg>
                  <span class="file-label">Select a file</span>
                </span>
              </label>
            </div>
            <input
              class="input is-info"
              type="text"
              placeholder="Target Path"
              .value="${this.wfAttUploadTarget}"
              @input="${this.inputUploadFileTarget}"
              style="box-sizing: border-box;"
            />
            <button
              class="button is-info is-light"
              @click="${this.addUploadFile}"
              style="width: 100%; box-sizing: border-box;"
            >
              Add
            </button>
          </div>
          <div
            style="margin-left: 20px; padding-bottom: 10px; border-top: 1px solid #dbdbdb;"
          ></div>
          <div
            style="display: grid; grid-template-columns: 1fr 3fr 3fr 1fr; grid-gap: 20px; align-items: center;"
          >
            <div
              class="label"
              style="align-self: center; margin-bottom: 0; margin-left: 40px; font-size: 14px; width: 80px;"
            >
              Remote
            </div>
            <input
              class="input is-info"
              type="text"
              placeholder="File URL (e.g., https://...)"
              .value="${this.wfAttFetchUrl}"
              @input="${this.inputFetchFileUrl}"
              style="box-sizing: border-box;"
            />
            <input
              class="input is-info"
              type="text"
              placeholder="Target Path"
              .value="${this.wfAttFetchTarget}"
              @input="${this.inputFetchFileTarget}"
              style="box-sizing: border-box;"
            />
            <button
              class="button is-info is-light"
              @click="${this.addFetchFile}"
              style="width: 100%; box-sizing: border-box;"
            >
              Add
            </button>
          </div>
        </div>

        <div class="block">
          <label class="label">Workflow Parameter</label>
          <textarea
            class="textarea is-info code-font"
            placeholder="Workflow Parameter"
            rows="14"
            .value="${this.wfParams}"
            @input="${this.inputWfParams}"
            style="box-sizing: border-box; max-width: 100%;"
          ></textarea>
        </div>
        <div
          class="block"
          style="display: flex; justify-content: flex-end; align-items: center;"
        >
          ${this.latestRun !== undefined
            ? x `<div
                class="label"
                style="margin-bottom: 0; margin-right: 20px;"
              >
                Executed with Run ID: ${(_a = this.latestRun) === null || _a === void 0 ? void 0 : _a.id}
              </div>`
            : x ``}
          <button
            class="button is-info ${this.executeLoading ? "is-loading" : ""}"
            @click="${this.executeWorkflow}"
          >
            ${this.executeLoading
            ? x ``
            : x `
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    style="padding-right: 8px;"
                  >
                    <path d="${mdiRocketLaunchOutline}" fill="#ffffff" />
                  </svg>
                `}
            Execute
          </button>
        </div>
      </div>
    `;
    }
    resultTabRender() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return x `
      <div class="block" style="margin-left: 20px; margin-right: 20px;">
        <div
          class="block"
          style="display: flex; justify-content: space-between;"
        >
          <div style="display: flex; align-items: center;">
            <div class="select">
              <select
                .value="${(_a = this.selectedRun) === null || _a === void 0 ? void 0 : _a.name}"
                @change="${this.selectRun}"
                style="boder-sizing: border-box;"
              >
                ${this.runs.map((run) => x `<option>${run.name}</option>`)}
              </select>
            </div>
            <div
              style="display: flex; height: 56px; padding-top: 16px; margin-left: 20px;"
            >
              <div style="align-self: center;">
                <span
                  class="tag is-medium ${((_b = this.selectedRunLog) === null || _b === void 0 ? void 0 : _b.state) ===
            "COMPLETE"
            ? "is-success"
            : ["QUEUED", "INITIALIZING", "RUNNING", "PAUSED"].includes((_c = this.selectedRunLog) === null || _c === void 0 ? void 0 : _c.state)
                ? "is-link"
                : [
                    "EXECUTOR_ERROR",
                    "SYSTEM_ERROR",
                    "CANCELED",
                    "CANCELING",
                ].includes((_d = this.selectedRunLog) === null || _d === void 0 ? void 0 : _d.state)
                    ? "is-danger"
                    : "is-light"}"
                  >${(_e = this.selectedRunLog) === null || _e === void 0 ? void 0 : _e.state}</span
                >
              </div>
              <div
                class="label"
                style="margin-left: 20px; align-self: center; margin-bottom: 0; margin-right: 10px;"
              >
                Duration
              </div>
              ${((_f = this.selectedRunLog) === null || _f === void 0 ? void 0 : _f.start_time)
            ? x `
                    <div style="align-self: center;">
                      <span class="tag"
                        >${this.selectedRunLog.start_time
                .replace("-", "/")
                .replace("T", " ")}</span
                      >
                    </div>
                  `
            : x ``}
              ${((_g = this.selectedRunLog) === null || _g === void 0 ? void 0 : _g.end_time)
            ? x `
                    <div style="align-self: center;">
                      <span
                        style="font-size: 16px; margin-left: 10px; margin-right: 8px;"
                        >-</span
                      >
                      <span class="tag"
                        >${this.selectedRunLog.end_time
                .replace("-", "/")
                .replace("T", " ")}</span
                      >
                    </div>
                  `
            : x ``}
            </div>
          </div>
          <div style="display: flex; align-items: center; padding-top: 16px; ">
            <button
              class="button is-link is-light"
              style="box-sizing: border-box; margin-right: 20px;"
              @click="${() => this.fetchRunLog(this.selectedRun)}"
            >
              Reload
            </button>
            <button
              class="button is-danger is-light"
              style="box-sizing: border-box;"
              @click="${() => this.removeRun(this.selectedRun)}"
            >
              Remove
            </button>
          </div>
        </div>

        <div class="block">
          <label class="label">Output</label>
          ${((_h = this.selectedRunLog) === null || _h === void 0 ? void 0 : _h.outputs)
            ? x ` <div
                class="block"
                style="display: flex-columns; border: 1px solid #dbdbdb; border-radius: 4px;"
              >
                ${(_k = (_j = this.selectedRunLog) === null || _j === void 0 ? void 0 : _j.outputs) === null || _k === void 0 ? void 0 : _k.map((file) => {
                return x `
                    <div
                      class="attach-child code-font"
                      style="padding: 8px 12px; display: flex; justify-content: space-between;"
                    >
                      ${file.file_name}
                      <a
                        class="tag is-link"
                        href="${file.file_url}"
                        download="${file.file_name}"
                        style="width: 36px;"
                      >
                        <svg viewBox="0 0 24 24" width="18" height="18">
                          <path d="${mdiDownloadOutline}" fill="#ffffff" />
                        </svg>
                      </a>
                    </div>
                  `;
            })}
              </div>`
            : x ``}
        </div>
        <div class="block">
          <label class="label">Stdout</label>
          <textarea
            class="textarea is-info code-font"
            rows="20"
            .value="${(_l = this.selectedRunLog) === null || _l === void 0 ? void 0 : _l.stdout}"
            style="box-sizing: border-box; max-width: 100%; font-size: 12px;"
            readonly
          ></textarea>
        </div>
        <div class="block">
          <label class="label">Stderr</label>
          <textarea
            class="textarea is-info code-font"
            rows="20"
            .value="${(_m = this.selectedRunLog) === null || _m === void 0 ? void 0 : _m.stderr}"
            style="box-sizing: border-box; max-width: 100%; font-size: 12px;"
            readonly
          ></textarea>
        </div>
      </div>
    `;
    }
    globalErrorNotification() {
        return x `
      <div class="notification is-danger is-light">${this.globalError}</div>
    `;
    }
    apiErrorNotification() {
        return x `
      <div class="notification is-danger is-light">${this.apiError}</div>
    `;
    }
    render() {
        return x `
      <div class="box" style="margin: 0 auto; border-radius: 12px;">
        <div style="margin: 20px;">
          <div class="content block">
            <h1 class="title">Neko-Punch 🐈👊</h1>
            <div class="block">
              <p class="subtitle">
                An execution interface, designed as a web component, for the
                effortless execution of workflows via GA4GH WES API.
              </p>
            </div>
          </div>
          <div
            class="header-details-container block"
            style="margin-left: 20px; margin-right: 20px;"
          >
            <div class="header-details">
              <div class="header-detail-key">WES Location</div>
              <div class="header-detail-value">
                <a href="${this.wesLocation}">${this.wesLocation}</a>
              </div>
            </div>
            <div class="header-details">
              <div class="header-detail-key">Yevis Metadata URL</div>
              <div class="header-detail-value">
                <a href="${this.yevisMetadataUrl}">${this.yevisMetadataUrl}</a>
              </div>
            </div>
            <div class="header-details">
              <div class="header-detail-key">Workflow Name</div>
              <div class="header-detail-value">
                ${this.wfName} (${this.wfVersion})
              </div>
            </div>
            <div class="header-details">
              <div class="header-detail-key">Workflow License</div>
              <div class="header-detail-value">${this.wfLicense}</div>
            </div>
            <div class="header-details">
              <div class="header-detail-key">Workflow Docs</div>
              <div class="header-detail-value">
                <a href="${this.wfReadme}">${this.wfReadme}</a>
              </div>
            </div>
          </div>
          ${this.globalError
            ? this.globalErrorNotification()
            : this.contentRender()}
          ${this.apiError ? this.apiErrorNotification() : x ``}
        </div>
      </div>
    `;
    }
};
// === styles ===
NekoPunch.styles = [
    bulmaStyles,
    i$2 `
      :host {
        font-family: "Hiragino Kaku Gothic ProN", "Hiragino Sans",
          "BIZ UDPGothic", "Helvetica Neue", Arial, Meiryo, sans-serif;
      }
      .header-details {
        display: grid;
        grid-template-columns: 1fr 5fr;
        gap: 20px;
        margin-bottom: 10px;
      }
      .header-detail-key {
        font-weight: bold;
        text-align: left;
        align-self: start;
      }
      .header-detail-value {
        word-wrap: break-word;
      }
      .attach-child:hover {
        background-color: hsl(219, 70%, 96%);
      }
      .code-font {
        font-family: Menlo, Consolas, "DejaVu Sans Mono", Courier, monospace;
      }
      .select:not(.is-multiple):not(.is-loading)::after,
      .navbar-link:not(.is-arrowless)::after {
        margin-top: -2px;
      }
    `,
];
__decorate([
    n$1({ attribute: "wes-location", type: String })
], NekoPunch.prototype, "wesLocation", void 0);
__decorate([
    n$1({ attribute: "yevis-metadata-url", type: String })
], NekoPunch.prototype, "yevisMetadataUrl", void 0);
__decorate([
    n$1({ attribute: "workflow-engine", type: String })
], NekoPunch.prototype, "workflowEngineAttr", void 0);
__decorate([
    t()
], NekoPunch.prototype, "serviceInfo", void 0);
__decorate([
    t()
], NekoPunch.prototype, "yevisMetadata", void 0);
__decorate([
    t()
], NekoPunch.prototype, "globalError", void 0);
__decorate([
    t()
], NekoPunch.prototype, "apiError", void 0);
__decorate([
    t()
], NekoPunch.prototype, "activeTab", void 0);
__decorate([
    t()
], NekoPunch.prototype, "runName", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfEngine", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfAttachments", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfAttUploadFile", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfAttUploadFileName", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfAttUploadTarget", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfAttFetchUrl", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfAttFetchTarget", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfParams", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfEngineParams", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfParamsCache", void 0);
__decorate([
    t()
], NekoPunch.prototype, "wfEngineParamsCache", void 0);
__decorate([
    t()
], NekoPunch.prototype, "latestRun", void 0);
__decorate([
    t()
], NekoPunch.prototype, "runs", void 0);
__decorate([
    t()
], NekoPunch.prototype, "selectedRun", void 0);
__decorate([
    t()
], NekoPunch.prototype, "runLogs", void 0);
__decorate([
    t()
], NekoPunch.prototype, "executeLoading", void 0);
NekoPunch = __decorate([
    e$1("neko-punch")
], NekoPunch);

export { NekoPunch };
