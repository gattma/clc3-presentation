from jinja2 import Environment, FileSystemLoader


class WorkflowBuilder:

    def __init__(self):
        self.workflow = []
        file_loader = FileSystemLoader('analyzer/resources')
        env = Environment(loader=file_loader)

        self.template = env.get_template('workflowXML.jinja')

    def append(self, action, value):
        self.workflow.append(WorkflowEntry(action, value))

    def build(self):
        return self.template.render(actions=self.workflow)


class WorkflowEntry:

    def __init__(self, action, value):
        self.action = action
        self.value = value
