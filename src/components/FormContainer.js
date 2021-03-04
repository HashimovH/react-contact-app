import React, { Component } from 'react'
import InputField from './InputField'
import ReactFlagsSelect from 'react-flags-select';
import CheckboxField from './CheckboxField';
import Message from './Message';


class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          lastName: '',
          email: '',
          jobTitle: '',
          company: '',
          industry: '',
          country: '',
          geography: '',
          message: '',
          sent: false
        }
      }

    changeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault()
        this.setState({
            sent: true,
            name: '',
            lastName: '',
            email: '',
            jobTitle: '',
            company: '',
            industry: '',
            country: '',
            geography: '',
        })
        e.target.reset()
    }
    checkFields = () => {
        const {name, lastName, email, company, industry, country, geography, message} = this.state
        return !(name && lastName && email && company && industry && country && geography && message)
    }
    render() {
        const {name, lastName, email, jobTitle, company, industry, country, geography, message, sent} = this.state
        const inputFields = [
            {id: 1,type: "text", name:"name", required: true, title:"First Name", value: name},
            {id: 2,type: "text", name:"lastName", required: true, title:"Last Name", value: lastName},
            {id: 3,type: "email", name:"email", required: true, title:"Email", value: email},
            {id: 4,type: "text", name:"jobTitle", required: false, title:"Job Title", value: jobTitle},
            {id: 5,type: "text", name:"company", required: true, title:"Company", value: company},
            {id: 6,type: "text", name:"industry", required: true, title:"Industry", value: industry},
        ]
        const checkboxFields = [
            {id: 1, name: "acceptTerms", label: ['By submitting this form I accept ', <a href="/privacy-policy/" target="_blank">privacy policy and cookie policy</a>, '.']},
            {id: 2, name: "acceptNewsletter", label: ['I would like to receive your newsletter.']}
        ]
        return (
            <div className="col-sm-12 col-md-12 col-lg-8 contact-form">
                <form onSubmit={this.handleSubmit}>
                    <Message show={sent}/>
                    <div className="row">
                        {inputFields.map((field)=>{
                            return (
                                <InputField
                                    key={field.id}
                                    type={field.type}
                                    name={field.name}
                                    required={field.required}
                                    value={field.value}
                                    onClick={this.changeInput}
                                    title={field.title}
                                />
                            )
                        })}
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                            <label htmlFor="country">Country*</label>
                            <ReactFlagsSelect
                                    selected={country}
                                    onSelect={code => this.setState({country: code})}
                                    className="country-select"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="geography">Operating geography</label>
                                <select className="form-control" id="geography" name="geography" selected={geography} onChange={this.changeInput}>
                                    <option value="" style={{display: 'none'}}>N/A</option>
                                    <option value="National">National</option>
                                    <option value="Regional">Regional</option>
                                    <option value="Global">Global</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="inquiry">What would you like to talk about?</label>
                            <textarea className="form-control fixed-textarea" name="message" id="inquiry" onChange={this.changeInput} defaultValue={message}></textarea>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            {checkboxFields.map((field)=>{
                                return (
                                    <CheckboxField
                                        key={field.id}
                                        name={field.name}
                                        text={field.label}
                                        title={field.title}
                                    />
                                )
                            })}
                        </div>
                        <div className="col-md-6 d-flex">
                            <button className="btn btn-danger ml-auto" disabled={this.checkFields()}>Send</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormContainer