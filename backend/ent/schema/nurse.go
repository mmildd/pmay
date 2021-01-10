package schema
 
import (
    "github.com/facebookincubator/ent/schema/edge"
    "github.com/facebookincubator/ent/schema/field"
    "github.com/facebookincubator/ent"
)
// Nurse holds the schema definition for the Nurse entity.
type Nurse struct {
    ent.Schema
}
// Fields of the Nurse.
func (Nurse) Fields() []ent.Field {
    return []ent.Field{
        field.String("nurse_Name").NotEmpty(),
		field.String("nurse_Email").NotEmpty(),
		field.String("nurse_Password").NotEmpty(),
		field.String("nurse_Tel").NotEmpty(),
    }
 }
 //Edges of the Certificate.
 func (Nurse) Edges() []ent.Edge {
    return []ent.Edge{
		edge. To("Nurse_Operativerecord",Operativerecord.Type).StorageKey(edge.Column("Nurse_id")),
 }
 }