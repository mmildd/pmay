// Code generated by entc, DO NOT EDIT.

package operative

const (
	// Label holds the string label denoting the operative type in the database.
	Label = "operative"
	// FieldID holds the string denoting the id field in the database.
	FieldID = "id"
	// FieldOperativeType holds the string denoting the operative_type field in the database.
	FieldOperativeType = "operative_type"
	// FieldOperativeName holds the string denoting the operative_name field in the database.
	FieldOperativeName = "operative_name"

	// EdgeOperativeOperativerecord holds the string denoting the operative_operativerecord edge name in mutations.
	EdgeOperativeOperativerecord = "Operative_Operativerecord"

	// Table holds the table name of the operative in the database.
	Table = "operatives"
	// OperativeOperativerecordTable is the table the holds the Operative_Operativerecord relation/edge.
	OperativeOperativerecordTable = "operativerecords"
	// OperativeOperativerecordInverseTable is the table name for the Operativerecord entity.
	// It exists in this package in order to avoid circular dependency with the "operativerecord" package.
	OperativeOperativerecordInverseTable = "operativerecords"
	// OperativeOperativerecordColumn is the table column denoting the Operative_Operativerecord relation/edge.
	OperativeOperativerecordColumn = "Operative_id"
)

// Columns holds all SQL columns for operative fields.
var Columns = []string{
	FieldID,
	FieldOperativeType,
	FieldOperativeName,
}

var (
	// OperativeTypeValidator is a validator for the "operative_Type" field. It is called by the builders before save.
	OperativeTypeValidator func(string) error
	// OperativeNameValidator is a validator for the "operative_Name" field. It is called by the builders before save.
	OperativeNameValidator func(string) error
)