goog.provide('plugin.file.gml.GMLDescriptor');
goog.require('os.data.FileDescriptor');
goog.require('os.layer.LayerType');
goog.require('plugin.file.gml.GMLParserConfig');
goog.require('plugin.file.gml.GMLProvider');



/**
 * GML file descriptor.
 * @param {plugin.file.gml.GMLParserConfig=} opt_config
 * @extends {os.data.FileDescriptor}
 * @constructor
 */
plugin.file.gml.GMLDescriptor = function(opt_config) {
  plugin.file.gml.GMLDescriptor.base(this, 'constructor');
  this.descriptorType = 'gml';
  this.parserConfig = opt_config || new plugin.file.gml.GMLParserConfig();
};
goog.inherits(plugin.file.gml.GMLDescriptor, os.data.FileDescriptor);


/**
 * @inheritDoc
 */
plugin.file.gml.GMLDescriptor.prototype.getType = function() {
  return os.layer.LayerType.FEATURES;
};


/**
 * @inheritDoc
 */
plugin.file.gml.GMLDescriptor.prototype.getLayerOptions = function() {
  var options = plugin.file.gml.GMLDescriptor.base(this, 'getLayerOptions');
  options['type'] = 'GML';

  // show the option to replace feature colors with the layer color
  options[os.layer.LayerOption.SHOW_FORCE_COLOR] = true;
  return options;
};


/**
 * Creates a new descriptor from a parser configuration.
 * @param {!plugin.file.gml.GMLParserConfig} config
 * @return {!plugin.file.gml.GMLDescriptor}
 */
plugin.file.gml.GMLDescriptor.createFromConfig = function(config) {
  var provider = plugin.file.gml.GMLProvider.getInstance();
  var descriptor = new plugin.file.gml.GMLDescriptor(config);
  os.data.FileDescriptor.createFromConfig(descriptor, provider, config);
  return descriptor;
};
