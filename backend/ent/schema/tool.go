package schema
 
import (
    "github.com/facebookincubator/ent/schema/edge"
    "github.com/facebookincubator/ent/schema/field"
    "github.com/facebookincubator/ent"
)
// Nurse holds the schema definition for the Nurse entity.
type Tool struct {
    ent.Schema
}
// Fields of the Nurse.
func (Tool) Fields() []ent.Field {
    return []ent.Field{
        field.String("Tool_Name").NotEmpty(),
		field.String("Tool_Amount").NotEmpty(),
		
    }
 }
 //Edges of the Certificate.
 func (Tool) Edges() []ent.Edge {
    return []ent.Edge{
		edge. To("Tool_Operativerecord",Operativerecord.Type).StorageKey(edge.Column("Tool_id")),
 }
 }