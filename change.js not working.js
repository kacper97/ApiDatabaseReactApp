 class Change extends React.component {
    state = {
          name: this.name,
          club: this.club,
          
        };
      handleAdd=(e) => {
         e.preventDefault();
        let name = this.state.name.trim();
        let club = this.state.club.trim();
        if (!name || !club) {
          return;
        }
      
        this.props.addHandler(name,club);
          this.setState({name: '', club: ''})
      };

       render() {
        
        return (
          <tr>
            <td >
            <input type="text"  placeholder="Name"
                     value={this.state.name} className="form-control"  />
            </td>

            <td >
            <input type="text"   placeholder="Club"
                     value={this.state.club} className="form-control" />
            </td>
      
            <td>
            <input type="button" onClick={this.handleAdd} className="btn btn-primary" value="Add"/>
            </td>
          </tr>
          )
      }

  }


   class Form extends React.Component {
       state = {
          status : '',
          name: this.props.player.name,
          club: this.props.player.club,
        };
        handleEdit = () =>  this.setState({ status : 'edit'} );

          handleSave = (e) =>  {
        e.preventDefault();
        let name = this.state.name.trim();
        let club = this.state.club.trim();

        if (!name || !club) {
          return;
        }
        this.setState({status : ''} )
         this.props.updateHandler(this.props.player._id,
                 name,club);
      };                 

          handleCancel = function() {
              this.setState({ status : '', 
                    name: this.props.player.name,
                    club: this.props.player.club} ) ;
          }.bind(this);    // Alternative to arrow function

          handleNameChange = (e) =>  this.setState({name: e.target.value});

          handleClubChange = (e) => this.setState({club: e.target.value});

           handleDelete = () =>  this.setState({ status : 'delete'} );

           handleUndo = (e) => this.setState({status:''});

           handleConfirm = (e) => { 
          this.props.deleteHandler(this.props.player._id) ;
      };

           

        render() {
      let activeButtons = buttons.normal ;
             let leftButtonHandler = this.handleEdit ;
             let rightButtonHandler = this.handleDelete ;
             let fields = [
                     <td key={'name'} >{this.state.name}</td>,
                      <td key={'club'}>{this.state.club}</td>
                   ] ; 

                   if (this.state.status === 'edit' ) {
                   activeButtons = buttons.edit ;
                   leftButtonHandler = this.handleSave;
                   rightButtonHandler = this.handleCancel ;
                   fields = [
                      <td key={'name'}><input type="text" className="form-control"
                         value={this.state.name}
                         onChange={this.handleNameChange} /> </td>,
                      <td key={'club'}><input type="text" className="form-control"
                         value={this.state.club}
                         onChange={this.handleClubChange} /> </td>,
                      ,
                   ] ;
               } ;   

               if (this.state.status === 'delete' ) {
                   activeButtons = buttons.delete ;
                   leftButtonHandler = this.handleUndo;
                   rightButtonHandler = this.handleConfirm ;
                   fields = [
                     <td key={'name'} >{this.state.name}</td>,
                      <td key={'club'}>{this.state.club}</td>
                     
                   ] ;
               }    
               
              return (
                    <tr >
                      {fields}
                      <td>
                          <input type="button" className={'btn ' + activeButtons.leftButtonColor} 
                                 value={activeButtons.leftButtonVal}
                                 onClick={leftButtonHandler} />
                      </td>
                      <td>
                         <input type="button" className={'btn ' + activeButtons.rightButtonColor} 
                               value={activeButtons.rightButtonVal} 
                               onClick={rightButtonHandler} />
                      </td>
                      </tr>
                   ) ; 
          }
    }






