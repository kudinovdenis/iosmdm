package mdmserver

import (
	"bytes"
	"encoding/xml"
	"errors"
	"io"
	"log"
	"reflect"
)

type PlistParser struct {

}

func (pp PlistParser) Unmarshall(data []byte, v interface{})  {
	log.Printf("Start unmarshalling Plist: %+v into %+v", string(data), v)

	info := reflect.ValueOf(v)
	r_elem := info.Elem()

	xmlDecoder := xml.NewDecoder(bytes.NewReader(data))
	pp.parseStruct(xmlDecoder, &r_elem)

	log.Printf("End unmarshalling")
}

func (pp PlistParser) parseStruct(decoder *xml.Decoder, v interface{}) error {
	//xml.Unmarshal()
	log.Printf("Processing: %+v", v)
	reflected := reflect.ValueOf(v)
	if reflected.Kind() != reflect.Ptr {
		return errors.New("type should be ptr, xml says so")
	}

	val := reflected.Elem()

	// Load value from interface, but only if the result will be
	// usefully addressable.
	if val.Kind() == reflect.Interface && !val.IsNil() {
		e := val.Elem()
		if e.Kind() == reflect.Ptr && !e.IsNil() {
			val = e
		}
	}

	if val.Kind() == reflect.Ptr {
		if val.IsNil() {
			val.Set(reflect.New(val.Type().Elem()))
		}
		val = val.Elem()
	}

	log.Printf("Val: %+v", val)
	return nil
}

func (pp PlistParser) parseString(decoder xml.Decoder) (*xml.Decoder, error) {
	return nil, nil
}

func (pp PlistParser) parseKeyValuePair(decoder xml.Decoder) (*xml.Decoder, error) {
	token, err := decoder.Token()

	if err != nil {
		return nil, err
	}

	if token == nil {
		return nil, nil
	}

	switch element := token.(type) {
	case xml.StartElement:
		if element.Name.Local == "string" {
			return pp.parseString(decoder)
		}
		log.Printf("Dict StartElement Name: %+v Attribute: %+v", element.Name, element.Attr)

	case xml.EndElement:
		log.Printf("Dict EndElement Name: %+v", element.Name)
		if element.Name.Local == "key" {
			log.Printf("Dict End of dict")
			//return decoder, nil
			return nil, nil
		}

	case xml.CharData:
		log.Panic("Char data in Key-Value")

	case xml.Comment:
		log.Printf("Dict Comment Encoded: %+v", element)

	case xml.ProcInst:
		log.Printf("Dict ProcInst Target: %+v Inst: %+v", element.Target, string(element.Inst))

	case xml.Directive:
		log.Printf("Dict Directive %+v", string(element))
	}

	return nil, nil
}

func (pp PlistParser) parseDict(decoder *xml.Decoder) (*xml.Decoder, error) {
	for {
		token, err := decoder.Token()
		if err != nil {
			return nil, err
		}

		if token == nil {
			return nil, nil
		}

		// StartElement, EndElement, CharData, Comment, ProcInst, or Directive.
		switch element := token.(type) {
		case xml.StartElement:
			if element.Name.Local == "dict" {
				pp.parseDict(decoder)
			}
			if element.Name.Local == "key" {

			}
			log.Printf("Dict StartElement Name: %+v Attribute: %+v", element.Name, element.Attr)

		case xml.EndElement:
			log.Printf("Dict EndElement Name: %+v", element.Name)
			if element.Name.Local == "dict" {
				log.Printf("Dict End of dict")
				return decoder, nil
			}

		case xml.CharData:
			log.Printf("Dict CharData Encoded: %+v", string(element))

		case xml.Comment:
			log.Printf("Dict Comment Encoded: %+v", element)

		case xml.ProcInst:
			log.Printf("Dict ProcInst Target: %+v Inst: %+v", element.Target, string(element.Inst))

		case xml.Directive:
			log.Printf("Dict Directive %+v", string(element))
		}
	}
}

func (pp PlistParser) parsePlist(plistReader io.Reader) error {
	decoder := xml.NewDecoder(plistReader)
	for {
		token, err := decoder.Token()
		if err != nil {
			return err
		}

		if token == nil {
			return nil
		}

		// StartElement, EndElement, CharData, Comment, ProcInst, or Directive.
		switch element := token.(type) {
		case xml.StartElement:
			if element.Name.Local == "dict" {
				decoder, err = pp.parseDict(decoder)
				if err != nil {
					return err
				}
			}
			log.Printf("StartElement Name: %+v Attribute: %+v", element.Name, element.Attr)

		case xml.EndElement:
			log.Printf("EndElement Name: %+v", element.Name)

		case xml.CharData:
			log.Printf("CharData Encoded: %+v", string(element))

		case xml.Comment:
			log.Printf("Comment Encoded: %+v", element)

		case xml.ProcInst:
			log.Printf("ProcInst Target: %+v Inst: %+v", element.Target, string(element.Inst))

		case xml.Directive:
			log.Printf("Directive %+v", string(element))
		}
	}
}