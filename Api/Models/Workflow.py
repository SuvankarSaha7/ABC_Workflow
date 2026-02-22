from extensions import db

#defining model 
class Workflow(db.Model):
    __tablename__ = "workflow"

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100))
    reportType = db.Column(db.String(100))
    division = db.Column(db.String(100))
    workflowType = db.Column(db.String(200))
    initiator = db.Column(db.String(100))
    approver1 = db.Column(db.String(100))
    approver2 = db.Column(db.String(100))
    approver3 = db.Column(db.String(100))
    approver4 = db.Column(db.String(100))