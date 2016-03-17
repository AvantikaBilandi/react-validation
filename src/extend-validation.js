module.exports = function() {
    var Validation = require('./../build');

    Validation.extendErrors({
        defaultDisabledClassName: 'custom-disabled-class-name',
        defaultInvalidClassName: 'custom-invalid-class-name',
        defaultHintClassName: 'custom-hint-class-name',
        defaultContainerClassName: 'custom-container-class-name',
        isRequired: {
            className: 'custom-invalid-class-name_required',
            message: 'required',
            rule: function(value) {
                return Boolean(Validation.validator.trim(value));
            }
        },
        isEmail: {
            className: 'ui-input_state_email-pattern-failed',
            message: 'should be email'
        },

        isAlpha: {
            message: 'only letters are valid'
        },
        isEqualToNamedInput: {
            message: 'should be equal',
            rule: function(value, comparedValue) {
                return value === comparedValue;
            }
        }
    });
};